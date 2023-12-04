import { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Typing.module.css";

// when the page loads we should grab all of the data and store in our state
// create state for data
// use oneffect to load the data when the page loads
// load the data into the form

export const Typing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [translations, setTranslations] = useState([]);
  const [currentTranslation, setCurrentTranslation] = useState();
  const [userTranslation, setUserTranslation] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [translationCounter, setTranslationCounter] = useState(0);

  // API GET CALL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/translations");
        const data = await response.json();
        setTranslations(data);
        // console.log("translation ", data[0].englishTranslation);
      } catch (error) {
        console.log("error ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // SetCurrentTranslation
  useEffect(() => {
    if (translations && translations.length > 0) {
      const fetchTranslations = () => {
        setCurrentTranslation(translations[0]);
      };
      fetchTranslations();
    }
  }, [translations]);

  // check currentTranslation
  useEffect(() => {
    if (
      userTranslation &&
      currentTranslation &&
      currentTranslation.turkishTranslation
    ) {
      if (userTranslation === currentTranslation.turkishTranslation) {
        console.log("good job!");
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

  console.log("translations length ", translations.length);
  console.log("counter length ", translationCounter);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          {isLoading || !currentTranslation ? (
            <p>Loading...</p>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="text-center">
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
              {translationCounter < translations.length - 1 && (
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={nextTranslationHanlder}
                  disabled={isCorrect ? false : true}
                >
                  Next Translation
                </button>
              )}
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};
