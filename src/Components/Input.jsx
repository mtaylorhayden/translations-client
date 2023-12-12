import { useState } from "react";
import styles from "./Input.module.css";

// this input should copy the style from the other inputs ?
export const Input = (props) => {
  const [inputValue, setInputValue] = useState();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      // we need to dynamically set this endpoint so all our forms can use this
      const response = await fetch(`http://localhost:8080/${props.path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      const data = await response.json();
      console.log("data ", data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input className="form-control" type="text" onChange={handleOnChange} />
      </div>
      <div className={styles.button}>
        <button className={`btn btn-primary`} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
