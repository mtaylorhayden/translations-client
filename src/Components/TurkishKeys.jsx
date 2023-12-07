export const TurkishKeys = (props) => {
  const onClickHandler = (e) => {
    props.onClickKeys(e.target.innerText);
  };

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ğ
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ı
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ş
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ç
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ö
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickHandler}
        >
          ü
        </button>
      </div>
    </>
  );
};
