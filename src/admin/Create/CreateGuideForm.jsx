import { useState } from "react";
import { Header } from "../../Components/Header";
import { CustomInput } from "../../Components/CustomInput";
import styles from "./Create.module.css";
import { Button } from "../../Components/Button";
import { CreateSentenceForm } from "./CreateSentenceForm";

export const CreateGuideForm = () => {
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

  const updateSentence = (newSentence) => {
    setGuide((prevGuide) => {
      return {
        ...prevGuide,
        sentences: newSentence,
      };
    });
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
  };

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
        value={guide.title}
      />
      <CustomInput
        placeholder="Description"
        onChangeHandler={guideInputChangeHandler}
        name="description"
        value={guide.description}
      />
      <CustomInput
        placeholder="Sub Description"
        name="subDescription"
        onChangeHandler={guideInputChangeHandler}
        value={guide.subDescription}
      />
      <CustomInput
        placeholder="Examples"
        name="examples"
        onChangeHandler={guideInputChangeHandler}
        value={guide.examples}
      />
      <h2 className={styles.label}>Sentence Fields</h2>
      <CreateSentenceForm
        sentences={guide.sentences}
        sentenceInputChangeHandler={updateSentence}
      />
      <h2 className={styles.label}>Translation Fields</h2>
      {translationInput}
      <Button data={guide} path={`guides`} />
    </Header>
  );
};
