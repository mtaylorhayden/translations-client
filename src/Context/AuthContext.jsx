import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// todo see if the token refreshing is working
// if the token is expired then refresh it
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(Cookies.get("token"));
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setAuthToken(Cookies.get("token"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshToken();
    }, 5 * 60 * 1000); // check every 5 minutes

    return () => clearInterval(interval);
  }, [authToken]);

  const refreshToken = async () => {
    const token = Cookies.get("token");
    if (!token) return;

    const decodedToken = jwtDecode(authToken);
    const currentEpochTime = Math.floor(Date.now() / 1000);
    const timeToExpiry = decodedToken.exp - currentEpochTime;
    if (timeToExpiry < 300) {
      // less than 5 mins to expire
      // call backend to refresh token
      const reponse = await fetch("http://localhost:8080/auth/refreshToken", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { access_token } = await reponse.json();
      const expireTime = setExpireTimeForCookie();
      Cookies.remove("token");
      Cookies.set("token", access_token, { expires: expireTime });
      setAuthToken(access_token);
      setUserRoleFromToken();
    }
  };

  const signIn = async (payload) => {
    const response = await fetch("http://localhost:8080/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
      }),
    });
    if (response.status !== 200) {
      return false;
    }
    const { access_token } = await response.json();
    const expireTime = setExpireTimeForCookie();
    Cookies.set("token", access_token, { expires: expireTime });
    setAuthToken(access_token);
    setUserRoleFromToken();

    return true;
  };

  // match the expire time for jwt and cookie
  const setExpireTimeForCookie = (access_token) => {
    const decodedToken = jwtDecode(access_token);
    const currentEpochTime = Math.floor(Date.now() / 1000);
    const timeToExpiry = decodedToken.exp - currentEpochTime;

    // Convert time to expiry from seconds to days for the cookie
    const expiresInDays = timeToExpiry / (60 * 60 * 24);
    return expiresInDays;
  };

  const setUserRoleFromToken = () => {
    const token = Cookies.get("token");
    if (!token) {
      return null;
    }

    const decodedToken = jwtDecode(token);
    console.log("decodedToken ", decodedToken);
    const role = decodedToken?.role;
    if (!role) {
      return null;
    }
    setUserRole(role);
  };

  const logout = () => {
    Cookies.remove("token");
    setAuthToken(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return authContext;
};
