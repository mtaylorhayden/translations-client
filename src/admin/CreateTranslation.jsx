// this should be navigated from either a home page and/or the navbar
// lets just make the form and then see what we can make reusable.

import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { useGuideContext } from "../Context/GuideContext";
import { Button } from "../Components/Button";
import styles from "./Create.module.css";
import { Dropdown } from "../Components/Dropdown";

export const CreateTranslation = () => {
  const { guides } = useGuideContext();
  const { selectedGuide, setSelectedGuide } = useGuideContext();
  const [translation, setTranslation] = useState({
    englishWord: "",
    turkishInfinitive: "",
    turkishConjugated: "",
  });

  const englishWordChangeHandler = (e) => {
    setTranslation((prevSentence) => ({
      ...prevSentence,
      englishWord: e.target.value,
    }));
  };

  const turkishInfinitiveChangeHandler = (e) => {
    setTranslation((prevSentence) => ({
      ...prevSentence,
      turkishInfinitive: e.target.value,
    }));
  };

  const turkishConjugatedChangeHandler = (e) => {
    setTranslation((prevSentence) => ({
      ...prevSentence,
      turkishConjugated: e.target.value,
    }));
  };

  const guideChangeHandler = (guideId) => {
    console.log("setGuide ", guideId);
    setSelectedGuide(guideId);
  };

  return (
    <Header title="Create a Translation">
      <div className={styles.dropdown}>
        Select a guide: {<Dropdown setGuide={guideChangeHandler} />}
      </div>
      <div className="input-group mb-3">
        <div className={styles.label}>English Word</div>
        <input
          className="form-control"
          type="text"
          onChange={englishWordChangeHandler}
          placeholder="To go"
        />
      </div>
      <div className="input-group mb-3">
        <div className={styles.label}>Turkish Infinitive</div>
        <input
          className="form-control"
          type="text"
          onChange={turkishInfinitiveChangeHandler}
          placeholder="Gitmek"
        />
      </div>
      <div className="input-group mb-3">
        <div className={styles.label}>Turkish Conjugated</div>
        <input
          className="form-control"
          type="text"
          onChange={turkishConjugatedChangeHandler}
          placeholder="Gidiyorum"
        />
      </div>
      <Button data={translation} guideId={selectedGuide} path="translations" />
    </Header>
  );
};
