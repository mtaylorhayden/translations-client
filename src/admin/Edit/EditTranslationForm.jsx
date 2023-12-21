import { CustomInput } from "../../Components/CustomInput";
import styles from "./Edit.module.css";

export const EditTranslationForm = ({
  guide,
  translationInputChangeHandler,
}) => {
  let content = guide.translations.map((translation, translationIndex) => {
    return (
      <div key={translationIndex} className={styles.card}>
        <CustomInput
          title="English Word"
          placeholder={translation.englishWord}
          name="englishWord"
          value={translation.englishWord}
          onChangeHandler={(e) =>
            translationInputChangeHandler(e, translationIndex)
          }
        />
        <CustomInput
          title="Turkish Infinitive"
          placeholder={translation.turkishInfinitive}
          name="turkishInfinitive"
          value={translation.turkishInfinitive}
          onChangeHandler={(e) =>
            translationInputChangeHandler(e, translationIndex)
          }
        />
        <CustomInput
          title="Turkish Conjugated"
          placeholder={translation.turkishConjugated}
          name="turkishConjugated"
          value={translation.turkishConjugated}
          onChangeHandler={(e) =>
            translationInputChangeHandler(e, translationIndex)
          }
        />
      </div>
    );
  });
  return (
    <>
      <h2 className={styles.label}>Translation Fields</h2>
      {content}
    </>
  );
};
