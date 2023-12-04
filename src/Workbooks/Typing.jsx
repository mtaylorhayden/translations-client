import { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// when the page loads we should grab all of the data and store in our state
// create state for data
// use oneffect to load the data when the page loads
// load the data into the form

export const Typing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [translations, setTranslations] = useState([]);
  const [currentTranslation, setCurrentTranslation] = useState();
  const [userTranslation, setUserTranslation] = useState("");

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
      }
    }
  }, [userTranslation, currentTranslation]);

  const onChangeHandler = (e) => {
    setUserTranslation(e.target.value);
  };

  const nextTranslationHanlder = (e) => {
    e.preventDefault();

    // when this button is clicked we should go to the next translation in the list
    // we can call setNextTranslation here...?
  };

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
                />
              </Form.Group>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={nextTranslationHanlder}
              >
                Next Translation
              </button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};
