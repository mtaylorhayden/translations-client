import styles from "./Guides.module.css";
import { Link } from "react-router-dom";
import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";

export const Guides = () => {
  return (
    <div className={containerStyles.container}>
      <div className={headerStyles.header}>Guides</div>
      <div className={descriptionStyles.description}>
        What would you like to learn today? We have several guides her for you
        to learn from. Current levels are from A1 to A2, but if you don't see
        something useful you can add your own and always come back here to
        review!
      </div>
      <ul>
        <li>
          <Link className={styles.link} to="/guide/1">
            <h3>Optative Mood</h3>
            <p>
              The optative mood in Turkish is used to express wishes, desires,
              or requests.
            </p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/guide/2">
            <h3>Imperative Mood</h3>
            <p>
              The imperative mood in Turkish is used to give commands, make
              requests, or offer suggestions
            </p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/guide/3">
            <h3>Past Tense</h3>
            <p>
              The past tense suffix is used to express things that have happened
              in the past.
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
