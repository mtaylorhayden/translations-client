import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { useAuthContext } from "../Context/AuthContext";
import styles from "./Auth.module.css";
import { redirect, useNavigate } from "react-router-dom";

// todo show some error when the user enters incorrect username/password
export const SignIn = () => {
  const { signIn, isAuth } = useAuthContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  const handleSignIn = (e) => {
    signIn(user);
    return redirect("/");
  };

  return (
    <Header title="Log In">
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        className={`btn btn-primary ${styles.button}`}
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </Header>
  );
};
