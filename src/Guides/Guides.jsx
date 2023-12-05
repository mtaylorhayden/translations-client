import styles from "./Guides.module.css";
import { Link } from "react-router-dom";
import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";
import { useEffect, useState } from "react";

export const Guides = () => {
  const [guides, setGuides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/guides");
        const data = await response.json();
        setGuides(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  let content = <p>Loading...</p>;

  if (!isLoading && guides.length) {
    console.log("guide data ", guides);
    content = (
      <ul>
        {guides.map((guide) => {
          return (
            <li>
              <Link className={styles.link} to={`/guide/${guide.id}`}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={containerStyles.container}>
      <div className={headerStyles.header}>Guides</div>
      <div className={descriptionStyles.description}>
        What would you like to learn today? We have several guides her for you
        to learn from. Current levels are from A1 to A2, but if you don't see
        something useful you can add your own and always come back here to
        review!
      </div>
      {content}
    </div>
  );
};
