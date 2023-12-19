import { useState } from "react";
import { Header } from "../Components/Header";
import { useGuideContext } from "../Context/GuideContext";
import { Button } from "../Components/Button";
import styles from "./Create.module.css";
import { Dropdown } from "../Components/Dropdown";
import { CustomInput } from "../Components/CustomInput";

export const CreateTranslation = () => {
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
    setSelectedGuide(guideId);
  };

  return (
    <Header title="Create a Translation">
      <div className={styles.dropdown}>
        Select a guide: {<Dropdown setGuide={guideChangeHandler} />}
      </div>

      <CustomInput
        label="English Word"
        onChangeHandler={englishWordChangeHandler}
        placeholder="To go"
      />

      <CustomInput
        label="Turkish Infinitive"
        onChangeHandler={turkishInfinitiveChangeHandler}
        placeholder="Gitmek"
      />

      <CustomInput
        label="Turkish Conjugated"
        onChangeHandler={turkishConjugatedChangeHandler}
        placeholder="Gidiyorum"
      />

      <Button data={translation} path={`translations/guide/${selectedGuide}`} />
    </Header>
  );
};
