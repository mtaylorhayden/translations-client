import { CustomInput } from "../../Components/CustomInput";
import styles from "./Edit.module.css";

export const EditSentenceForm = ({ sentences, sentenceInputChangeHandler }) => {
  const inputChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const updatedSentences = sentences.map((sentence, i) => {
      if (i === index) {
        return { ...sentence, [name]: value };
      }
      return sentence;
    });
    sentenceInputChangeHandler(updatedSentences);
  };

  const addSentenceHandler = () => {
    const newSentence = { aSide: "", bSide: "" };
    sentenceInputChangeHandler([...sentences, newSentence]);
  };

  const removeSentenceHandler = (e, sentenceIndex) => {
    const newSentences = [...sentences];
    newSentences.splice(sentenceIndex, 1);
    sentenceInputChangeHandler(newSentences);
  };

  let content = sentences.map((sentence, sentenceIndex) => {
    return (
      <div key={sentenceIndex} className={styles.card}>
        <CustomInput
          title="A Side"
          placeholder={sentence.aSide}
          name="aSide"
          value={sentence.aSide}
          onChangeHandler={(e) => inputChangeHandler(e, sentenceIndex)}
        />
        <CustomInput
          title="B Side"
          name="bSide"
          placeholder={sentence.bSide}
          value={sentence.bSide}
          onChangeHandler={(e) => inputChangeHandler(e, sentenceIndex)}
        />
        <button
          className="btn btn-danger"
          onClick={(e) => removeSentenceHandler(e, sentenceIndex)}
        >
          Remove Sentence
        </button>
      </div>
    );
  });

  return (
    <>
      <h2 className={styles.label}>Sentence Fields</h2>
      {content}
      <button className="btn btn-primary" onClick={addSentenceHandler}>
        Add Sentence
      </button>
    </>
  );
};
