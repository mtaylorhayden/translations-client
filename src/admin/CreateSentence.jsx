import { useState } from "react";
import { Header } from "../Components/Header";
import { useGuideContext } from "../Context/GuideContext";
import { Button } from "../Components/Button";
import styles from "./Create.module.css";
import { Dropdown } from "../Components/Dropdown";
import { CustomInput } from "../Components/CustomInput";

export const CreateSentence = () => {
  const { isLoading } = useGuideContext();
  const { selectedGuide, setSelectedGuide } = useGuideContext();
  const [sentence, setSentence] = useState({
    aSide: "",
    bSide: "",
  });

  const aSideChangeHandler = (e) => {
    console.log(e.target.value);
    setSentence((prevSentence) => ({
      ...prevSentence,
      aSide: e.target.value,
    }));
  };

  const bSideChangeHandler = (e) => {
    setSentence((prevSentence) => ({
      ...prevSentence,
      bSide: e.target.value,
    }));
  };

  const guideChangeHandler = (guideId) => {
    setSelectedGuide(guideId);
  };

  let content = <p>Loading...</p>;

  if (!isLoading) {
    content = (
      <Header title="Create a Sentence">
        <div className={styles.dropdown}>
          Select a guide: {<Dropdown setGuide={guideChangeHandler} />}
        </div>
        <CustomInput
          label="A Side"
          onChangeHandler={aSideChangeHandler}
          placeholder={"Merhaba"}
        />
        <CustomInput
          label="B Side"
          onChangeHandler={bSideChangeHandler}
          placeholder={"Hello"}
        />
        <Button data={sentence} path={`sentences/guide/${selectedGuide}`} />
      </Header>
    );
  }

  return <>{content};</>;
};
