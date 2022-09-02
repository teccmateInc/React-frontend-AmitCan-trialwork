import { useState } from "react";
import Carret from "../icons/svg/carret.svg";

import "./select-stick.css";

const SelectStick = ({ placeholder, opts = [] }) => {
  const [open, setOpen] = useState(false);
  const [sele, setSele] = useState(0);

  function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!open) {
      checkboxes.style.display = "block";
      setOpen(true);
    } else {
      checkboxes.style.display = "none";
      setOpen(false);
    }
  }

  const handleSelectClick = (e) => {
    if (e.target.checked) setSele(sele + 1);
    else if (!e.target.checked) setSele(sele - 1);
  };

  return (
    <div className="multiselect">
      {open && <span className="open-span">{placeholder}</span>}
      <div className="selectBox" onClick={showCheckboxes}>
        <div className="select-div">
          <div className="">{open ? `${sele} Selected` : placeholder}</div>
          <img src={Carret} alt="carret" />
        </div>
      </div>
      <div id="checkboxes">
        <label htmlFor="p1">
          <input
            type="checkbox"
            className="checkbox-field"
            id="p1"
            onClick={handleSelectClick}
          />
          Product #1
        </label>
        <label htmlFor="p2">
          <input
            type="checkbox"
            className="checkbox-field"
            id="p2"
            onClick={handleSelectClick}
          />
          Product #2
        </label>
        <label htmlFor="p3">
          <input
            type="checkbox"
            className="checkbox-field"
            id="p3"
            onClick={handleSelectClick}
          />
          Product #3
        </label>
      </div>
    </div>
  );
};

export default SelectStick;
