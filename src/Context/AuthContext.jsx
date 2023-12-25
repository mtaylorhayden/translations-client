import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(Cookies.get("token"));

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
    const { access_token } = await response.json();
    Cookies.set("token", access_token, { expires: 1 });
    setAuthToken(access_token);
  };

  const logout = () => {
    Cookies.remove("token");
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, signIn, logout }}>
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
