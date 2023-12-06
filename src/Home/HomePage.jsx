import React from "react";
import styles from "./HomePage.module.css";
import { Header } from "../Components/Header";

export const HomePage = () => {
  const description = `I've created this application to help me learn, practice, and study my
        Turkish skills. Please feel free to poke around. This frontend is made
        using React and interacts with a Nest.js REST API that I built.
        Improvements coming often!`;

  return (
    <Header title="Welcome To Study!" description={description}>
      <div className={styles.benefits}>
        Learning a second language has numerous benefits, such as enhancing
        cognitive abilities, improving communication skills, and gaining a
        deeper understanding of different cultures.
      </div>
      <div className={styles.footer}>
        "Education is the most powerful weapon which you can use to change the
        world." - Nelson Mandela
      </div>
    </Header>
  );
};
