import styles from "./Guides.module.css";
import { Link, Outlet } from "react-router-dom";

export const Guides = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Guides</div>
      <h4 className={styles.description}>
        What would you like to learn today? We have several guides her for you
        to learn from. Current levels are from A1 to A2, but if you don't see
        something useful you can add your own and always come back here to
        review!
      </h4>
      <ul>
        <li>
          <Link to="/guide/1">
            <h3>Optative Mood</h3>
            <p>
              The optative mood in Turkish is used to express wishes, desires,
              or requests.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/guide/2">
            <h3>Imperative Mood</h3>
            <p>
              The imperative mood in Turkish is used to give commands, make
              requests, or offer suggestions
            </p>
          </Link>
        </li>
        <li>
          <h3>Past Tense</h3>
          <p>
            The past tense suffix is used to express things that have happened
            in the past.
          </p>
        </li>
      </ul>
    </div>
  );
};
