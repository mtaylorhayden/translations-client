import { useState } from "react";
import { Header } from "../../Components/Header";
import { CustomInput } from "../../Components/CustomInput";
import styles from "./Edit.module.css";
import { EditGuideModal } from "./EditGuideModal";
import { useGuideContext } from "../../Context/GuideContext";
import { EditSentenceForm } from "./EditSentenceForm";
import { EditTranslationForm } from "./EditTranslationForm";

export const EditGuideForm = ({ guide }) => {
  const [updatedGuide, setUpdatedGuide] = useState(guide);
  const [showModal, setShowModal] = useState(false);
  const { updateGuide } = useGuideContext();
  console.log("updated guide", updatedGuide.sentences);

  const handleSubmitOnClick = async (e) => {
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
      if (response.ok) {
        setShowModal(true);
        updateGuide(updatedGuide, id);
      }
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

  const updateSentence = (newSentence) => {
    setUpdatedGuide((prevGuide) => ({
      ...prevGuide,
      sentences: newSentence,
    }));
  };

  // const sentenceInputChangeHandler = (e, index) => {
  //   const { name, value } = e.target;

  //   const updatedSentences = updatedGuide.sentences.map((sentence, i) => {
  //     if (index === i) {
  //       return { ...sentence, [name]: value };
  //     }
  //     return sentence;
  //   });

  //   setUpdatedGuide((prevGuide) => ({
  //     ...prevGuide,
  //     sentences: updatedSentences,
  //   }));
  // };

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

  return (
    <Header title="Edit a Guide">
      <h2 className={styles.label}>Guide Fields</h2>
      <div className={styles.card}>
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
      </div>
      <EditSentenceForm
        sentences={updatedGuide.sentences}
        sentenceInputChangeHandler={updateSentence}
      />

      <EditTranslationForm
        guide={updatedGuide}
        translationInputChangeHandler={translationInputChangeHandler}
      />
      <button className="btn btn-primary" onClick={handleSubmitOnClick}>
        Submit
      </button>
      {showModal && <EditGuideModal setShowModal={setShowModal} />}
    </Header>
  );
};
