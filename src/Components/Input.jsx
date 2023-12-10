// this input should copy the style from the other inputs ?
export const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <div className="input-group mb-3">
        <input type="text" />
      </div>
    </div>
  );
};
