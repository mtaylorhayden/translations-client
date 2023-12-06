import styles from "./Guide.module.css";
import { useParams } from "react-router-dom";
import { OptativeTable } from "../Tables/OptativeTable";
import { PassTenseTable } from "../Tables/PassTenseTable";
import { PresentContinousTable } from "../Tables/PresentContinousTable";
import { Header } from "../Components/Header";
import { useEffect, useState } from "react";
import { Practice } from "./Practice";

export const Guide = () => {
  const { guideId } = useParams();
  const [guide, setGuide] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [practiceIsHidden, setPracticeIsHidden] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/guides/${guideId}`);
        const data = await response.json();
        console.log("data in guide useEffect ", data);
        setGuide(data);
      } catch (error) {
        console.log("error fetching guide ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePracticeClick = () => {
    // hide button
    // combine these
    // setButtonIsHidden(true);
    setPracticeIsHidden(false);
    // create new component for this
    // show the infinitive verb and the english word
    // show the input field
    // render component, pass in the data through props
  };

  const getTable = () => {
    switch (guideId) {
      case "1":
        return <PresentContinousTable />;
      case "2":
        return <PassTenseTable />;
      case "4":
        return <PresentContinousTable />;
      default:
        return null;
    }
  };

  let content = <p>Loading...</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (!isLoading && guide) {
    console.log("is the data loaded? ", guide);

    const examples = guide.examples ? (
      guide.examples.split(",").map((example, index) => {
        return <li key={index}>{example}</li>;
      })
    ) : (
      <li>No examples</li>
    );

    content = (
      <Header title={guide.title} description={guide.description}>
        <h3 className={styles.title}>Examples:</h3>
        <ul>{examples}</ul>
        {getTable()}
        {practiceIsHidden ? (
          <div className={styles.centerButton}>
            <button
              className={`${styles.button} btn btn-primary`}
              onClick={handlePracticeClick}
            >
              Practice {guide.title}
            </button>
          </div>
        ) : (
          <Practice translations={guide.translations} />
        )}
      </Header>
    );
  }

  return <>{content}</>;
};
