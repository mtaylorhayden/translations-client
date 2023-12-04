import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styles from "./TranslationsInput.module.css";

export const TranslationsInput = () => {
  const [words, setWords] = useState();

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
    <div className="App">
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>Translation Input</h1>
        <h4 className={styles.headerDescription}>
          What words do you want to practice? Add your own!. Just make sure your
          words are seperated by a comma.
        </h4>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group col-6 mx-auto">
          <label className={styles.label}>
            Enter an English word then a Turkish word here.
          </label>
          <textarea
            className="form-control"
            rows="3"
            onBlur={onBlurHandler}
            value={words}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enter
        </button>
      </form>
    </div>
  );
};
