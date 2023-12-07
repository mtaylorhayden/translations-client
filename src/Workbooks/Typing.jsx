import { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Typing.module.css";
import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";

export const Typing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [translations, setTranslations] = useState([]);
  const [currentTranslation, setCurrentTranslation] = useState("");
  const [userTranslation, setUserTranslation] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [translationCounter, setTranslationCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/translations");
        const data = await response.json();
        setTranslations(data);

        if (data.length > 0) {
          setCurrentTranslation(data[0]);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  // check currentTranslation
  useEffect(() => {
    if (
      userTranslation &&
      currentTranslation &&
      currentTranslation.turkishTranslation
    ) {
      if (userTranslation === currentTranslation.turkishTranslation) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  }, [userTranslation, currentTranslation]);

  const onChangeHandler = (e) => {
    setUserTranslation(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (isCorrect) {
        nextTranslationHanlder(e);
      }
    }
  };

  const nextTranslationHanlder = (e) => {
    e.preventDefault();
    setUserTranslation("");
    setIsCorrect(false);
    setCurrentTranslation(translations[translationCounter + 1]);
    setTranslationCounter((prevState) => {
      return prevState + 1;
    });
  };

  const restartButtonHandler = (e) => {
    setTranslationCounter(0);
    setCurrentTranslation(translations[0]);
    setUserTranslation("");
    setIsCorrect(false);
  };

  let content = <p>Loading...</p>;

  if (translationCounter === translations.length) {
    content = (
      <>
        <h2 className={styles.label}>Congrats you have finished this set</h2>
        <button className="btn btn-primary" onClick={restartButtonHandler}>
          Restart?
        </button>
      </>
    );
  }

  if (!isLoading && currentTranslation) {
    content = (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className={styles.label}>
            {/* english translation */}
            {currentTranslation.englishTranslation}
          </Form.Label>
          <Form.Control
            type="translation"
            placeholder="Enter the word in Turkish"
            value={userTranslation}
            onChange={onChangeHandler}
            className={`${isCorrect ? styles.successOutline : ""}`}
            onKeyPress={handleEnterKeyPress}
          />
        </Form.Group>
        <button
          type="button"
          className="btn btn-primary"
          onClick={nextTranslationHanlder}
          disabled={isCorrect ? false : true}
        >
          Next Translation
        </button>
      </Form>
    );
  }

  return (
    <div className={containerStyles.container}>
      <Container>
        <Row className={`${styles.text} justify-content-center`}>
          {/* Header */}
          <div className={headerStyles.header}>Vocab Skills</div>
          <div className={descriptionStyles.description}>
            Practice your vocabulary by typing out the words or sentences
            presented to you.
          </div>
          <Col className={styles.text}>{content}</Col>
        </Row>
      </Container>
    </div>
  );
};
