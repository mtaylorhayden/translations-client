import { useState } from "react";
import { Header } from "../../Components/Header";
import { CustomInput } from "../../Components/CustomInput";
import styles from "./Create.module.css";
import { CreateSentenceForm } from "./CreateSentenceForm";
import { CreateTranslationForm } from "./CreateTranslationForm";
import { CreateGuideModal } from "./CreateGuideModal";
import { useGuideContext } from "../../Context/GuideContext";

export const CreateGuideForm = () => {
  const [showModal, setShowModal] = useState(false);
  const { addGuide } = useGuideContext();
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

  const handleSubmitOnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/guides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(guide),
      });
      const data = await response.json();
      const { id } = data;
      console.log("response", data);
      if (response.ok) {
        setShowModal(true);
        addGuide(data);
      }
    } catch (error) {
      console.error("API submission error", error);
      throw error;
    }
  };

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

  const updateTranslation = (newTranslation) => {
    setGuide((prevGuide) => {
      return {
        ...prevGuide,
        translations: newTranslation,
      };
    });
  };

  return (
    <Header title="Create a Guide">
      <h2 className={styles.label}>Guide Fields</h2>
      <div className={styles.card}>
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
      </div>
      <CreateSentenceForm
        sentences={guide.sentences}
        sentenceInputChangeHandler={updateSentence}
      />
      <CreateTranslationForm
        translations={guide.translations}
        translationInputChangeHandler={updateTranslation}
      />
      <button
        className={`btn btn-primary ${styles.submitBtn}`}
        onClick={handleSubmitOnClick}
      >
        Submit
      </button>
      {showModal && <CreateGuideModal setShowModal={setShowModal} />}
    </Header>
  );
};
