import styles from "./Create.module.css";
import { CustomInput } from "../../Components/CustomInput";

export const CreateTranslationForm = ({
  translations,
  translationInputChangeHandler,
}) => {
  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const updatedTranslation = translations.map((translation, i) => {
      if (i === index) {
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

  const removeTranslationHandler = (e, index) => {
    const newTranslations = [...translations];
    newTranslations.splice(index, 1);
    translationInputChangeHandler(newTranslations);
  };

  let content = translations.map((translation, translationIndex) => {
    return (
      <div key={translationIndex} className={styles.card}>
        <CustomInput
          title="English Word"
          placeholder="To go"
          name="englishWord"
          value={translation.englishWord}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />

        <CustomInput
          title="Turkish Word"
          placeholder="Gitmek"
          name="turkishInfinitive"
          value={translation.turkishInfinitive}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />

        <CustomInput
          title="Turkish Conjugated"
          placeholder="Gidiyorum"
          name="turkishConjugated"
          value={translation.turkishConjugated}
          onChangeHandler={(e) => inputChangeHandler(e, translationIndex)}
        />
        <button
          className="btn btn-danger"
          onClick={(e) => removeTranslationHandler(e, translationIndex)}
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
