import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(Cookies.get("token"));
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    setAuthToken(Cookies.get("token"));
  }, []);

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
    Cookies.set("token", access_token, { expires: 1 });
    setAuthToken(access_token);
    setUserRoleFromToken();
    return true;
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
