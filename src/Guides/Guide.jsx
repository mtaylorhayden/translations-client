import styles from "./Guide.module.css";
import { useParams } from "react-router-dom";
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
        if (!response.ok) {
          setError("Sorry, we are having some issues");
        }
        const data = await response.json();
        setGuide(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePracticeClick = () => {
    setPracticeIsHidden(false);
  };

  const getTable = () => {
    switch (guideId) {
      case "1":
        return <PresentContinousTable />;
      case "2":
        return <PassTenseTable />;
      default:
        return null;
    }
  };

  let content = <p>Loading...</p>;

  if (error) {
    return (content = <p>{error}</p>);
  }

  if (guide) {
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
