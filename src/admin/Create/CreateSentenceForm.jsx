import styles from "./Create.module.css";
import { CustomInput } from "../../Components/CustomInput";

export const CreateSentenceForm = ({
  sentences,
  sentenceInputChangeHandler,
}) => {
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
    content = (
      <div key={sentenceIndex} className={styles.card}>
        <CustomInput
          title="A Side"
          placeholder={"Merhaba"}
          name="aSide"
          value={sentence.aSide}
          onChangeHandler={(e) => inputChangeHandler(e, sentenceIndex)}
        />
        <CustomInput
          title="B Side"
          placeholder={"Hello"}
          name="bSide"
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
      {content};
      <button className="btn btn-primary" onClick={addSentenceHandler}>
        Add Sentence
      </button>
    </>
  );
};
