import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import styles from "./AdminHome.module.css";

export const AdminHome = () => {
  return (
    <Header
      title="Admin Home Page"
      description="This page is used for admins only. Create guides, sentences, and translations"
    >
      <ul>
        <li>
          <Link to={"/admin/createSentence"} className={styles.link}>
            <h3>Create a Sentence</h3>
            <p>
              Used to create a sentence entity. Must be connected to a guide.
              Only two fields are English Word and a Turkish word
            </p>
          </Link>
        </li>
        <li>
          <Link to={"/admin/createTranslation"} className={styles.link}>
            <h3>Create a Translation</h3>
            <p>
              Used to create a translation entity. Must be connected to a guide.
              Fields are English word, Turkish infinitive verb, and the
              conjugated verb.
            </p>
          </Link>
        </li>
        <li>
          <Link to={"/admin/createGuide"} className={styles.link}>
            <h3>Create a Guide</h3>
            <p>
              Used to create a translation entity. You should think about what
              you want the user to learn here. You can also create sentences and
              translations here to connect to a guide.
            </p>
          </Link>
        </li>
      </ul>
    </Header>
  );
};
