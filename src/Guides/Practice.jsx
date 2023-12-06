import { useEffect, useState } from "react";
import styles from "./Practice.module.css";

export const Practice = ({ translations }) => {
  //console.log("practice ", translations);
  const [isLoading, setIsLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentTranslation, setCurrentTranslation] = useState({
    englishWord: "",
    turkishInfinitive: "",
    turkishConjugated: "",
  });
  const [translationCounter, setTranslationCounter] = useState(0);

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
    // console.log("before set userInput ", e.target.value);
    setUserInput(e.target.value);
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
        <div className={`${styles.container} input-group mb-1`}>
          <input
            type="text"
            // className="form-control"
            onChange={onChangeHandler}
            className={`${isCorrect ? styles.success : ""} form-control`}
          />
        </div>
      </>
    );
  }

  return <>{content}</>;
};
