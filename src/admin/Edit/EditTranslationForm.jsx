import { CustomInput } from "../../Components/CustomInput";
import styles from "./Edit.module.css";

export const EditTranslationForm = ({
  translations,
  translationInputChangeHandler,
}) => {
  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;

    const updatedTranslation = translations.map((translation, i) => {
      if (index === i) {
        return { ...translation, [name]: value };
      }
      return translation;
    });
    translationInputChangeHandler(updatedTranslation);
  };

  const addTranslationHandler = () => {
    const newTranslation = {
      englishWord: "",
      turkishInfinitive: "",
      turkishConjugated: "",
    };
    translationInputChangeHandler([...translations, newTranslation]);
  };

  const removeSentenceHandler = (e, translationIndex) => {
    const newTranslations = [...translations];
    newTranslations.splice(translationIndex, 1);
    translationInputChangeHandler(newTranslations);
  };

  let content = translations.map((translation, translationIndex) => {
    return (
      <div key={translationIndex} className={styles.card}>
        <CustomInput
          title="English Word"
          name="englishWord"
          placeholder={translation.englishWord}
          value={translation.englishWord}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />
        <CustomInput
          title="Turkish Infinitive"
          name="turkishInfinitive"
          placeholder={translation.turkishInfinitive}
          value={translation.turkishInfinitive}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />
        <CustomInput
          title="Turkish Conjugated"
          name="turkishConjugated"
          placeholder={translation.turkishConjugated}
          value={translation.turkishConjugated}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />
        <button
          className="btn btn-danger"
          onClick={(e) => removeSentenceHandler(e, translationIndex)}
        >
          Remove Translation
        </button>
      </div>
    );
  });
  return (
    <>
      <h2 className={styles.label}>Translation Fields</h2>
      {content}
      <button className="btn btn-primary" onClick={addTranslationHandler}>
        Add Translation
      </button>
    </>
  );
};
