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

  const updateTranslation = (newTranslation) => {
    setUpdatedGuide((prevGuide) => ({
      ...prevGuide,
      translations: newTranslation,
    }));
  };

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
        translations={updatedGuide.translations}
        translationInputChangeHandler={updateTranslation}
      />
      <button
        className={`btn btn-primary ${styles.submitBtn}`}
        onClick={handleSubmitOnClick}
      >
        Submit
      </button>
      {showModal && <EditGuideModal setShowModal={setShowModal} />}
    </Header>
  );
};
