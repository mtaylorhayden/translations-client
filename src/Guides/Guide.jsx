import styles from "./Guide.module.css";
import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";
import { useParams } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";
import { OptativeTable } from "../Tables/OptativeTable";
import { PassTenseTable } from "../Tables/PassTenseTable";
import { PresentContinousTable } from "../Tables/PresentContinousTable";
import { Header } from "../Components/Header";

export const Guide = () => {
  const { guideId } = useParams();
  const { selectedGuide } = useGuideContext();

  const examples = selectedGuide.examples.split(",").map((example) => {
    return <li>{example}</li>;
  });

  const getTable = () => {
    switch (guideId) {
      case "1":
        return <OptativeTable />;
      case "3":
        return <PassTenseTable />;
      case "4":
        return <PresentContinousTable />;
      default:
        return null;
    }
  };

  return (
    <Header title={selectedGuide.title} description={selectedGuide.description}>
      <h3 className={descriptionStyles.description}>Examples:</h3>
      <ul>{examples}</ul>
      <div className={descriptionStyles.description}>Verb Gelmek</div>
      {getTable()}
    </Header>
  );
};
