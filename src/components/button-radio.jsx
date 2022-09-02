import "./button-radio.css";

const ButtonRadio = ({ name }) => {
  return (
    <ul className="button-radio">
      <li>
        <input id="br-1" type="radio" name={name} defaultChecked />
        &nbsp;<label htmlFor="br-1">One Major Problem</label>
      </li>
      <li>
        <input id="br-2" type="radio" name={name} />
        &nbsp;<label htmlFor="br-2">Various things</label>
      </li>
    </ul>
  );
};

export default ButtonRadio;
