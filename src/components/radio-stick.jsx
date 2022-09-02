import "./radio-stick.css";

const RadioStick = ({ rad }) => {
  const { id, text, extraComponent, ExtraComp } = rad;

  const handleCheck = () => {
    const elem = document.getElementsByClassName("radio-stick__override");
    const elem2 = document.getElementsByClassName("extra-comp__override");
    if (elem && elem.length > 0) {
      elem[0].classList.remove("radio-stick__override");
    }
    if (elem2 && elem2.length > 0) {
      elem2[0].classList.remove("extra-comp__override");
    }

    document
      .getElementById(`radio-override-${id}`)
      .classList.add("radio-stick__override");
    const elem3 = document.getElementById(`radio-stick__detail${id}`);
    if (elem3 && elem3?.classList && elem3?.classList.length > 0) {
      elem3.classList.add("extra-comp__override");
    }
  };

  return (
    <div className="radio-stick__root">
      <label
        className="radio-stick"
        htmlFor={`radio-stick-${id}`}
        id={`radio-override-${id}`}
      >
        <input
          type="radio"
          name="stick-radio"
          className="radio-stick__radio"
          id={`radio-stick-${id}`}
          onClick={handleCheck}
        />
        <p className="radio-stick__text">{text}</p>
      </label>
      {extraComponent && (
        <div
          className="radio-stick__details"
          id={`radio-stick__detail${id}`}
          style={{ display: "none" }}
        >
          <ExtraComp />
        </div>
      )}
    </div>
  );
};

export default RadioStick;
