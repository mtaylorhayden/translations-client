import styles from "./CustomInput.module.css";

// Use this for my div inputs
export const CustomInput = ({
  name,
  onChangeHandler,
  placeholder,
  title,
  value,
  type = "text",
}) => {
  return (
    <>
      <div className={styles.label}>{title}</div>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type={type}
          onChange={onChangeHandler}
          placeholder={placeholder}
          name={name}
          value={value}
        />
      </div>
    </>
  );
};
