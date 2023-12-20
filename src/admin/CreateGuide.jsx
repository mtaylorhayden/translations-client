import { useState } from "react";
import { Header } from "../Components/Header";
import { CustomInput, Input } from "../Components/CustomInput";
import styles from "./Create.module.css";
import { Button } from "../Components/Button";

// can't update the sentences and translations.
// we need to know which sentence and translation we want to update.
// we could also eventually have multiple sentences and translations added to a guide in 1 call
// TLDR none of the input handlers work.
// for guide - any update overrides title
// for sentence - a new field is made in the array
// for translation - a new field is made in the first array and can't add other fields.

export const CreateGuide = () => {
  const [guide, setGuide] = useState({
    title: "",
    description: "",
    subDescription: "",
    examples: "",
    translation: [
      {
        englishWord: "",
        turkishInfinitive: "",
        turkishConjugated: "",
      },
    ],
    sentence: [
      {
        aSide: "",
        bSide: "",
      },
    ],
  });

  const guideInputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("guideInputChangeHandler1 ", name, value);
    setGuide((prevGuide) => ({
      ...prevGuide,
      [name]: value,
    }));
    console.log("guideInputChangeHandler2 ", guide);
  };

  const sentenceInputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(
      "sentenceInputChangeHandler1 name",
      name,
      "sentenceInputChangeHandler1",
      value
    );
    setGuide((prevGuide) => ({
      ...prevGuide,
      sentence: {
        ...prevGuide.sentence,
        [name]: value,
      },
    }));
    console.log("sentenceInputChangeHandler2 ", guide);
  };

  const translationInputChangeHandler = (e, arrayName, index) => {
    const { name, value } = e.target;
    console.log("translationInputChangeHandler ", name, value);

    setGuide((prevGuide) => {
      // Copy the target array from the state
      const updatedArray = [...prevGuide[arrayName]];

      // Update the specific object within the array
      updatedArray[index] = {
        ...updatedArray[index],
        [name]: value,
      };
      // Return the updated guide state
      return { ...prevGuide, [arrayName]: updatedArray };

      // translation: {
      //   ...prevGuide.translation,
      //   [name]: value,
      // },
    });
    console.log("translationInputChangeHandler ", guide);
  };

  return (
    <Header title="Create a Guide">
      <CustomInput
        placeholder="Title"
        onChangeHandler={guideInputChangeHandler}
        name="title"
      />
      <CustomInput
        placeholder="Description"
        onChangeHandler={guideInputChangeHandler}
        name="description"
      />
      <CustomInput
        placeholder="Sub Description"
        name="subDescription"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Examples"
        name="examples"
        onChangeHandler={guideInputChangeHandler}
      />
      <CustomInput
        placeholder="Sentence A Side"
        name="aSide"
        onChangeHandler={sentenceInputChangeHandler}
      />
      <CustomInput
        placeholder="Sentence B Side"
        name="bSide"
        onChangeHandler={sentenceInputChangeHandler}
      />
      <CustomInput
        placeholder="English Word"
        name="englishWord"
        onChangeHandler={translationInputChangeHandler}
      />
      <CustomInput
        placeholder="Turkish Infinitive"
        name="turkishInfinitive"
        onChangeHandler={translationInputChangeHandler}
      />
      <CustomInput
        placeholder="Turkish Conjugated"
        name="turkishConjugated"
        onChangeHandler={(e) =>
          translationInputChangeHandler(e, "translation", 0)
        }
      />
      <Button data={guide} path={`guides`} />
    </Header>
  );
};
