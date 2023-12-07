import { useEffect, useState, useRef } from "react";
import styles from "./Practice.module.css";
import { TurkishKeys } from "../Components/TurkishKeys";
import confetti from "https://esm.run/canvas-confetti@1";
import { ProgressBar } from "../Components/ProgressBar";

export const Practice = ({ translations }) => {
  const inputRef = useRef(null);
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

  const [progress, setProgress] = useState({
    incrementValue: 100 / translations.length,
    currentProgress: 0,
  });

  // set intial translation
  useEffect(() => {
    if (translations.length > 0) {
      setCurrentTranslation({
        englishWord: translations[0].englishWord,
        turkishInfinitive: translations[0].turkishInfinitive,
        turkishConjugated: translations[0].turkishConjugated,
      });
      setIsLoading(false);
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
    setProgress((prevProgress) => ({
      ...prevProgress,
      currentProgress: prevProgress.currentProgress + progress.incrementValue,
    }));
    if (translations.length - 1 === translationCounter && isCorrect) {
      setFinishMessage("Congratulations! You've finished practicing.");
      confetti({
        particleCount: 150,
        spread: 60,
      });
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

  const handleTurkishKeyClick = (turkishKey) => {
    setUserInput((prevValue) => prevValue + turkishKey);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickNextHandler();
    }
  };

  const handleRestartClick = () => {
    setUserInput("");
    setTranslationCounter(0);
    setProgress({
      incrementValue: 100 / translations.length,
      currentProgress: 0,
    });
    setIsCorrect(false);
    setCurrentTranslation({
      englishWord: translations[0].englishWord,
      turkishInfinitive: translations[0].turkishInfinitive,
      turkishConjugated: translations[0].turkishConjugated,
    });
    setFinishMessage(null);
  };

  let content = <p>Loading...</p>;

  if (!isLoading && currentTranslation.englishWord !== "") {
    content = (
      <>
        <ProgressBar progress={progress} />
        <div>
          <label className={styles.label}>
            {currentTranslation.englishWord}
            {" : "}
            {currentTranslation.turkishInfinitive}
          </label>
        </div>

        <div className={`${styles.container} input-group mb-3`}>
          <input
            ref={inputRef}
            type="text"
            onChange={onChangeHandler}
            value={userInput}
            className={`${isCorrect ? styles.success : ""} form-control`}
            onKeyPress={handleEnterKeyPress}
          />
        </div>
        <TurkishKeys onClickKeys={handleTurkishKeyClick} />

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
        <>
          <h2 className={styles.label}>{finishMessage}</h2>
          <div className={styles.button}>
            <button className={`btn btn-primary`} onClick={handleRestartClick}>
              Restart?
            </button>
          </div>
        </>
      ) : (
        content
      )}
    </>
  );
};
