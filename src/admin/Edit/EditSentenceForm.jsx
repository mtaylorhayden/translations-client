import { CustomInput } from "../../Components/CustomInput";
import styles from "./Edit.module.css";

export const EditSentenceForm = ({ guide, sentenceInputChangeHandler }) => {
  let content = guide.sentences.map((sentence, sentenceIndex) => {
    return (
      <div key={sentenceIndex} className={styles.card}>
        <div className={styles.cardHeading}></div>
        <CustomInput
          title="A Side"
          placeholder={sentence.aSide}
          name="aSide"
          value={sentence.aSide}
          onChangeHandler={(e) => sentenceInputChangeHandler(e, sentenceIndex)}
        />
        <CustomInput
          title="B Side"
          name="bSide"
          placeholder={sentence.bSide}
          value={sentence.bSide}
          onChangeHandler={(e) => sentenceInputChangeHandler(e, sentenceIndex)}
        />
      </div>
    );
  });
  return (
    <>
      <h2 className={styles.label}>Sentence Fields</h2>
      {content}
    </>
  );
};
