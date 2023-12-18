import { useGuideContext } from "../Context/GuideContext";
import styles from "./Button.module.css";

export const Button = (props) => {
  const { guides } = useGuideContext();
  const effectiveGuideId = props.guideId || guides[0]?.id;

  const handleSubmit = async (e) => {
    try {
      // we need to dynamically set this endpoint so all our forms can use this
      const response = await fetch(
        `http://localhost:8080/${props.path}/guide/${effectiveGuideId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(props.data),
        }
      );
      const data = await response.json();
      console.log("data ", data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div className={styles.button}>
      <button className={`btn btn-primary`} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
