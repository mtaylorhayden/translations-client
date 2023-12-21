import { useState } from "react";
import { Header } from "../../Components/Header";
import { CustomInput } from "../../Components/CustomInput";
import styles from "../Create.module.css";

// TODO: need guides to reload on patch
export const EditGuideForm = ({ guide }) => {
  const [updatedGuide, setUpdatedGuide] = useState(guide);

  const handleSubmitOnClick = async (e) => {
    console.log("submit ", updatedGuide);
    e.preventDefault();

    const { id, ...guideData } = updatedGuide;

    try {
      const response = await fetch(`http://localhost:8080/guides/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(guideData),
      });

      // should we reload the page here with the updated guide and a success message?
    } catch (error) {
      console.error("API submission error", error);
      throw error;
    }
  };

  // ***************************** start change handlers *****************************
  const guideInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedGuide((prevGuide) => ({
      ...prevGuide,
      [name]: value,
    }));
  };

  const sentenceInputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    console.log("sentenceInputChangeHandler ", name, value);

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
  };

  // ***************************** end change handlers *****************************

  // ***************************** start sentence/translation inputs *****************************

  const sentenceInput = updatedGuide.sentences.map(
    (sentence, sentenceIndex) => {
      return (
        <div key={sentenceIndex}>
          <CustomInput
            title="A Side"
            placeholder={sentence.aSide}
            name="aSide"
            value={sentence.aSide}
            onChangeHandler={(e) =>
              sentenceInputChangeHandler(e, sentenceIndex)
            }
          />
          <CustomInput
            title="B Side"
            placeholder="Sentence B Side"
            name="bSide"
            value={sentence.bSide}
            onChangeHandler={(e) =>
              sentenceInputChangeHandler(e, sentenceIndex)
            }
          />
        </div>
      );
    }
  );

  const translationInput = updatedGuide.translations.map(
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
      <button className="btn btn-primary" onClick={handleSubmitOnClick}>
        Submit
      </button>
    </Header>
  );
};
