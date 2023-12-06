import descriptionStyles from "../Styles/Description.module.css";
import { useParams } from "react-router-dom";
import { OptativeTable } from "../Tables/OptativeTable";
import { PassTenseTable } from "../Tables/PassTenseTable";
import { PresentContinousTable } from "../Tables/PresentContinousTable";
import { Header } from "../Components/Header";
import { useEffect, useState } from "react";

export const Guide = () => {
  const { guideId } = useParams();
  const [guide, setGuide] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

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

  const getTable = () => {
    switch (guideId) {
      case "1":
        return <PresentContinousTable />;
      case "3":
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
        <h3 className={descriptionStyles.description}>Examples:</h3>
        <ul>{examples}</ul>
        <div className={descriptionStyles.description}>Verb Gelmek</div>
        {getTable()}
      </Header>
    );
  }

  return <>{content}</>;
};
