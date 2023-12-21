import { useGuideContext } from "../Context/GuideContext";
import { useApiSubmit } from "../Hooks/useApiSubmit";
import styles from "./Button.module.css";

export const Button = ({ path, data }) => {
  const submit = useApiSubmit();

  const handleSubmit = async (e) => {
    try {
      submit(path, data);
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
