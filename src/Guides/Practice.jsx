import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "./Practice.module.css";

export const Practice = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState("");

  return (
    <>
      <div>
        <label className={styles.label}>To go: Gitmek</label>
      </div>
      <div className={`${styles.container} input-group mb-1`}>
        {/* <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Gitmek
          </span>
        </div> */}
        <input
          type="text"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </>
  );
};
