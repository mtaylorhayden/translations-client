// this should be navigated from either a home page and/or the navbar
// lets just make the form and then see what we can make reusable.
// right now I only see the button

import { useState } from "react";
import { Header } from "../Components/Header";
import { useGuideContext } from "../Context/GuideContext";
import { Button } from "../Components/Button";
import styles from "./Create.module.css";
import { Dropdown } from "../Components/Dropdown";

export const CreateSentence = () => {
  const { isLoading } = useGuideContext();
  const { selectedGuide, setSelectedGuide } = useGuideContext();
  const [sentence, setSentence] = useState({
    aSide: "",
    bSide: "",
  });

  const aSideChangeHandler = (e) => {
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
        <div className="input-group mb-3">
          <div className={styles.label}>A Side</div>
          <input
            className="form-control"
            type="text"
            onChange={aSideChangeHandler}
            placeholder="merhaba"
          />
        </div>
        <div className="input-group mb-3">
          <div className={styles.label}>B Side</div>
          <input
            className="form-control"
            type="text"
            onChange={bSideChangeHandler}
            placeholder="hello"
          />
        </div>
        <Button data={sentence} path={`sentences/guide/${selectedGuide}`} />
      </Header>
    );
  }

  return <>{content};</>;
};
