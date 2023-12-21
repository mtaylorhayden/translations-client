import { useState } from "react";
import { Header } from "../Components/Header";
import { CustomInput } from "../Components/CustomInput";
import styles from "./Create.module.css";

export const EditGuideForm = ({ guide }) => {
  const [updatedGuide, setUpdatedGuide] = useState(guide);
  console.log("updatedGuide ", updatedGuide);

  // ***************************** start change handlers
  const guideInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedGuide((prevGuide) => ({
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
    setUpdatedGuide((prevGuide) => ({
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
    setUpdatedGuide((prevGuide) => {
      return {
        ...prevGuide,
        translations: updatedTranslation,
      };
    });
    console.log("updatedTranslation ", guide);
  };

  // ***************************** end change handlers

  // ***************************** start sentence/translation inputs

  const sentenceInput = guide.sentences.map((sentence, sentenceIndex) => {
    return (
      <div key={sentenceIndex}>
        <CustomInput
          placeholder="Sentence A Side"
          name="aSide"
          value={sentence.aSide}
          onChangeHandler={(e) => sentenceInputChangeHandler(e, sentenceIndex)}
        />
        <CustomInput
          placeholder="Sentence B Side"
          name="bSide"
          value={sentence.bSide}
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
            value={translation.englishWord}
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
          <CustomInput
            placeholder="Turkish Infinitive"
            name="turkishInfinitive"
            value={translation.turkishInfinitive}
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
          <CustomInput
            placeholder="Turkish Conjugated"
            name="turkishConjugated"
            value={translation.turkishConjugated}
            onChangeHandler={(e) =>
              translationInputChangeHandler(e, translationIndex)
            }
          />
        </div>
      );
    }
  );

  // ***************************** end sentence/translation inputs

  return (
    <Header title="Edit a Guide">
      <h2 className={styles.label}>Guide Fields</h2>
      <CustomInput
        placeholder="Title"
        onChangeHandler={guideInputChangeHandler}
        name="title"
        value={updatedGuide.title}
      />
      <CustomInput
        placeholder="Description"
        onChangeHandler={guideInputChangeHandler}
        name="description"
        value={updatedGuide.description}
      />
      <CustomInput
        placeholder="Sub Description"
        name="subDescription"
        onChangeHandler={guideInputChangeHandler}
        value={updatedGuide.subDescription}
      />
      <CustomInput
        placeholder="Examples"
        name="examples"
        onChangeHandler={guideInputChangeHandler}
        value={updatedGuide.examples}
      />
      <h2 className={styles.label}>Sentence Fields</h2>
      {sentenceInput}
      <h2 className={styles.label}>Translation Fields</h2>
      {translationInput}
      <button className="btn btn-primary">Submit</button>
    </Header>
  );
};
