import { useState } from "react";
import { Header } from "../Components/Header";
import { useAuthContext } from "../Context/AuthContext";
import styles from "./Auth.module.css";
// todo, send request, and handle token.
export const SignIn = () => {
  const { signIn } = useAuthContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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
        onClick={() => signIn(user)}
      >
        Sign In
      </button>
    </Header>
  );
};
