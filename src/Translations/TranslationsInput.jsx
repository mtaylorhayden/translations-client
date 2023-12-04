import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const TranslationsInput = () => {
  const [words, setWords] = useState();

  const onBlurHandler = (e) => {
    setWords(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const translations = { translations: words };

    fetch("http://localhost:8080/translations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(translations),
    })
      .then((response) => response)
      .then((data) => console.log("post request ", data))
      .catch((error) => console.log("Error :", error));
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group col-6 mx-auto">
          <label>
            Enter an English word then a Turkish word here. They should be comma
            seperated
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onBlur={onBlurHandler}
            value={words}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Enter
        </button>
      </form>
    </div>
  );
};
