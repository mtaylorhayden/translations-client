import { useState } from "react";
import { Header } from "../Components/Header";
import { CustomInput, Input } from "../Components/CustomInput";
import styles from "./Create.module.css";

export const CreateGuide = () => {
  const [guide, setGuide] = useState({
    title: "",
    description: "",
    subDescription: "",
    examples: "",
    translation: {
      englishWord: "",
      turkishInfinitive: "",
      turkishConjugated: "",
    },
    sentence: {
      aSide: "",
      bSide: "",
    },
  });

  const guideInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setGuide((prevGuide) => ({
      ...prevGuide,
      [name]: value,
    }));
    console.log("guideInputChangeHandler ", guide);
  };

  const sentenceInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setGuide((prevGuide) => ({
      ...prevGuide,
      sentence: {
        ...prevGuide.sentence,
        [name]: value,
      },
    }));
    console.log("sentenceInputChangeHandler ", guide);
  };

  const translationInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setGuide((prevGuide) => ({
      ...prevGuide,
      translation: {
        ...prevGuide.translation,
        [name]: value,
      },
    }));
    console.log("translationInputChangeHandler ", guide);
  };

  return (
    <Header title="Create a Guide">
      <CustomInput
        placeholder="Title"
        title="title"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Description"
        title="description"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Sub Description"
        title="subDescription"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Examples"
        title="examples"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Sentence A Side"
        title="aSide"
        onChangeHandler={sentenceInputChangeHandler}
      />
      <CustomInput
        placeholder="Sentence B Side"
        title="bSide"
        onChangeHandler={sentenceInputChangeHandler}
      />
      <CustomInput
        placeholder="English Word"
        title="englishWord"
        onChangeHandler={translationInputChangeHandler}
      />
      <CustomInput
        placeholder="Turkish Infinitive"
        title="turkishInfinitive"
        onChangeHandler={translationInputChangeHandler}
      />
      <CustomInput
        placeholder="Turkish Conjugated"
        title="turkishConjugated"
        onChangeHandler={translationInputChangeHandler}
      />
    </Header>
  );
};
