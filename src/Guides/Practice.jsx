import { useEffect, useState } from "react";
import styles from "./Practice.module.css";

export const Practice = ({ translations }) => {
  //   console.log("practice ", translations);
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState({
    englishWord: "",
    turkishInfinitive: "",
    turkishConjugated: "",
  });
  const [translationCounter, setTranslationCounter] = useState(0);
  const [finishMessage, setFinishMessage] = useState(null);

  // set intial translation
  useEffect(() => {
    console.log("useEffect called");
    if (translations.length > 0) {
      setCurrentTranslation({
        englishWord: translations[0].englishWord,
        turkishInfinitive: translations[0].turkishInfinitive,
        turkishConjugated: translations[0].turkishConjugated,
      });
      setIsLoading(false);
      console.log("in useEffect ", translations[0]);
    }
  }, [translations]);

  // check the userInput
  useEffect(() => {
    if (userInput !== "") {
      if (
        userInput.toLowerCase() ===
        currentTranslation.turkishConjugated.toLowerCase()
      ) {
        setIsCorrect(true);
        console.log("good job");
      } else {
        setIsCorrect(false);
      }
    }
  }, [userInput, currentTranslation.turkishConjugated]);

  // set the userInput
  const onChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const onClickNextHandler = () => {
    if (translations.length - 1 === translationCounter && isCorrect) {
      setFinishMessage("Finished");
      return;
    }
    setUserInput("");
    setIsCorrect(false);
    setCurrentTranslation({
      englishWord: translations[translationCounter + 1].englishWord,
      turkishInfinitive: translations[translationCounter + 1].turkishInfinitive,
      turkishConjugated: translations[translationCounter + 1].turkishConjugated,
    });
    setTranslationCounter((prevState) => prevState + 1);
  };

  let content = <p>Loading...</p>;

  if (!isLoading && currentTranslation.englishWord !== "") {
    content = (
      <>
        <div>
          <label className={styles.label}>
            Apply the lesson to: {currentTranslation.turkishInfinitive}
          </label>
        </div>
        <div className={`${styles.container} input-group mb-3`}>
          <input
            type="text"
            aria-describedby="basic-addon2"
            onChange={onChangeHandler}
            value={userInput}
            className={`${isCorrect ? styles.success : ""} form-control`}
          />
        </div>
        <div className={styles.button}>
          <button
            className={`btn btn-primary`}
            disabled={isCorrect ? false : true}
            onClick={onClickNextHandler}
          >
            Next
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {finishMessage ? (
        <h2 className={styles.label}>{finishMessage}</h2>
      ) : (
        content
      )}
    </>
  );
};
