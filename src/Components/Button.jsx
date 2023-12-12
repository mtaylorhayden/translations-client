import styles from "./Button.module.css";

export const Button = (props) => {
  const handleSubmit = async (e) => {
    console.log("button props ", props);
    const guideId = props.guideId;
    if (!guideId) {
      return "Please select a guide";
    }
    try {
      console.log("button props.data ", props.data);
      // we need to dynamically set this endpoint so all our forms can use this
      const response = await fetch(
        `http://localhost:8080/${props.path}/guide/${guideId}`,
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
