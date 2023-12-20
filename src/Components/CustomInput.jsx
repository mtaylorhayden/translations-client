import styles from "./CustomInput.module.css";

// Use this for my div inputs
export const CustomInput = ({ name, onChangeHandler, placeholder, title }) => {
  return (
    <>
      <div className={styles.label}>{title}</div>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          onChange={onChangeHandler}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </>
  );
};
