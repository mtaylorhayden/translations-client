import styles from "./Guides.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGuideContext } from "../Context/GuideContext";
import { Header } from "../Components/Header";

export const Guides = () => {
  const { setSelectedGuide } = useGuideContext();
  const { guides } = useGuideContext();
  const { isLoading } = useGuideContext();

  const handleGuideClick = (guide) => {
    setSelectedGuide(guide);
  };

  const description = `What would you like to learn today? We have several guides her for you to learn from. 
    Current levels are from A1 to A2, but if you don't see something useful you can add your own 
    and always come back here to review!`;

  let content = <p>Loading...</p>;

  if (!isLoading && guides.length) {
    content = (
      <ul>
        {guides.map((guide) => {
          return (
            <li>
              <Link
                className={styles.link}
                to={`/guide/${guide.id}`}
                onClick={() => handleGuideClick(guide)}
              >
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
    <Header title="Guides" description={description}>
      {content}
    </Header>
  );
};
