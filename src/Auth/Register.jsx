import { Header } from "../Components/Header";
import styles from "./Auth.module.css";

export const Register = () => {
  return (
    <Header title="Register">
      <div className="input-group mb-3">
        <input className="form-control" type="text" placeholder="first name" />
      </div>
      <div className="input-group mb-3">
        <input className="form-control" type="text" placeholder="last name" />
      </div>
      <div className="input-group mb-3">
        <input className="form-control" type="text" placeholder="username" />
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="password"
          placeholder="password"
        />
      </div>
      <button className={`btn btn-primary ${styles.button}`}>Register</button>
    </Header>
  );
};
