import { useState } from "react";
import { Header } from "../Components/Header";
import { CustomInput, Input } from "../Components/CustomInput";
import styles from "./Create.module.css";
import { Button } from "../Components/Button";

export const CreateGuide = () => {
  const [guide, setGuide] = useState({
    title: "",
    description: "",
    subDescription: "",
    examples: "",
    translation: [
      {
        englishWord: "",
        turkishInfinitive: "",
        turkishConjugated: "",
      },
    ],
    sentence: [
      {
        aSide: "",
        bSide: "",
      },
    ],
  });

  const guideInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setGuide((prevGuide) => ({
      ...prevGuide,
      [name]: value,
    }));
  };

  const sentenceInputChangeHandler = (e, index) => {
    const { name, value } = e.target;

    const updatedSentence = guide.sentence.map((sentence, i) => {
      if (index === i) {
        return { ...sentence, [name]: value };
      }
      return sentence;
    });
    setGuide((prevGuide) => ({
      ...prevGuide,
      sentence: updatedSentence,
    }));
  };

  const translationInputChangeHandler = (e, index) => {
    const { name, value } = e.target;

    const updatedTranslation = guide.translation.map((translation, i) => {
      if (index === i) {
        return { ...translation, [name]: value };
      }
      return translation;
    });
    setGuide((prevGuide) => {
      return {
        ...prevGuide,
        translation: updatedTranslation,
      };
    });
    console.log("updatedTranslation ", guide);
  };

  const sentenceInput = guide.sentence.map((sentence, sentenceIndex) => {
    return (
      <div key={sentenceIndex}>
        <CustomInput
          placeholder="Sentence A Side"
          name="aSide"
          onChangeHandler={(e) => sentenceInputChangeHandler(e, sentenceIndex)}
        />
        <CustomInput
          placeholder="Sentence B Side"
          name="bSide"
          onChangeHandler={(e) => sentenceInputChangeHandler(e, sentenceIndex)}
        />
      </div>
    );
  });

  const translationInput = guide.translation.map(
    (translation, translationIndex) => {
      return (
        <div key={translationIndex}>
          <CustomInput
            placeholder="English Word"
            name="englishWord"
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
          <CustomInput
            placeholder="Turkish Infinitive"
            name="turkishInfinitive"
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
          <CustomInput
            placeholder="Turkish Conjugated"
            name="turkishConjugated"
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
        </div>
      );
    }
  );

  return (
    <Header title="Create a Guide">
      <CustomInput
        placeholder="Title"
        onChangeHandler={guideInputChangeHandler}
        name="title"
      />
      <CustomInput
        placeholder="Description"
        onChangeHandler={guideInputChangeHandler}
        name="description"
      />
      <CustomInput
        placeholder="Sub Description"
        name="subDescription"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Examples"
        name="examples"
        onChangeHandler={guideInputChangeHandler}
      />
      {sentenceInput}
      {translationInput}
      <Button data={guide} path={`guides`} />
    </Header>
  );
};
