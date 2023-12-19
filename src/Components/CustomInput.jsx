import styles from "./Input.module.css";

// Use this for my div inputs
export const CustomInput = ({ title, onChangeHandler, placeholder }) => {
  return (
    <div className="input-group mb-3">
      <div className={styles.label}>{title}</div>
      <input
        className="form-control"
        type="text"
        onChange={onChangeHandler}
        placeholder={placeholder}
        name={title}
      />
    </div>
  );
};
