export const TurkishKeys = (props) => {
  const onClickHandler = (e) => {
    console.log("In TurkishKeys ", e.target.innerText);
    props.onClickKeys(e.target.innerText);
  };

  return (
    <>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ğ
        </button>
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ı
        </button>
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ş
        </button>
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ç
        </button>
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ö
        </button>
        <button type="button" class="btn btn-primary" onClick={onClickHandler}>
          ü
        </button>
      </div>
    </>
  );
};
