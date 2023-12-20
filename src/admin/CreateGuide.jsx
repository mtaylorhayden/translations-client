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
    translations: [
      {
        englishWord: "",
        turkishInfinitive: "",
        turkishConjugated: "",
      },
    ],
    sentences: [
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

    const updatedSentence = guide.sentences.map((sentence, i) => {
      if (index === i) {
        return { ...sentence, [name]: value };
      }
      return sentence;
    });
    setGuide((prevGuide) => ({
      ...prevGuide,
      sentences: updatedSentence,
    }));
  };

  const translationInputChangeHandler = (e, index) => {
    const { name, value } = e.target;

    const updatedTranslation = guide.translations.map((translation, i) => {
      if (index === i) {
        return { ...translation, [name]: value };
      }
      return translation;
    });
    setGuide((prevGuide) => {
      return {
        ...prevGuide,
        translations: updatedTranslation,
      };
    });
    console.log("updatedTranslation ", guide);
  };

  const sentenceInput = guide.sentences.map((sentence, sentenceIndex) => {
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

  const translationInput = guide.translations.map(
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
      <h2 className={styles.label}>Guide Fields</h2>
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
      <h2 className={styles.label}>Sentence Fields</h2>
      {sentenceInput}
      <h2 className={styles.label}>Translation Fields</h2>
      {translationInput}
      <Button data={guide} path={`guides`} />
    </Header>
  );
};
