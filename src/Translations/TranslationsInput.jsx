import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "./TranslationsInput.module.css";
import { Header } from "../Components/Header";

export const TranslationsInput = () => {
  const [words, setWords] = useState();

  const description = `What words do you want to practice? Add your own!. Just make sure your
        words are seperated by a comma.`;

  const onBlurHandler = (e) => {
    setWords(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const translations = { translations: words };

    fetch("http://localhost:8080/translations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(translations),
    })
      .then((response) => response)
      .then((data) => console.log("post request ", data))
      .catch((error) => console.log("Error :", error));
  };

  return (
    <Header title="Translation Input" description={description}>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className={styles.label}>
            Enter an English word then a Turkish word here.
          </label>
          <textarea
            className={`${styles.textarea} form-control`}
            rows="3"
            onBlur={onBlurHandler}
            value={words}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enter
        </button>
      </form>
    </Header>
  );
};
