import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";

const AuthContext = createContext();

// todo
// signout
// token refresh
// register
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // useEffect(() => {
  //   setAuthToken(Cookies.get("token"));
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refreshToken();
  //   }, 5 * 60 * 1000); // check every 5 minutes

  //   return () => clearInterval(interval);
  // }, [authToken]);

  // const refreshToken = async () => {
  //   const token = Cookies.get("token");
  //   if (!token) return;

  //   const decodedToken = jwtDecode(authToken);
  //   const currentEpochTime = Math.floor(Date.now() / 1000);
  //   const timeToExpiry = decodedToken.exp - currentEpochTime;
  //   if (timeToExpiry < 300) {
  //     // less than 5 mins to expire
  //     // call backend to refresh token
  //     const reponse = await fetch("http://localhost:8080/auth/refreshToken", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const { access_token } = await reponse.json();
  //     const expireTime = setExpireTimeForCookie();
  //     Cookies.remove("token");
  //     Cookies.set("token", access_token, { expires: expireTime });
  //     // setAuthToken(access_token);
  //     setUserRoleFromToken();
  //   }
  // };

  const signIn = async (payload) => {
    const response = await fetch("http://localhost:8080/auth/signIn", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
      }),
    });
    if (response.status !== 200) {
      // set error message
      return false;
    }
    const { role } = await response.json();
    console.log(role);
    setIsAuth(true);
    setUserRole(role);

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

  const signOut = () => {
    setIsAuth(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, signIn, signOut, userRole }}>
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
