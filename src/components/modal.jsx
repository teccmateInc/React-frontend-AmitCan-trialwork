import { useNavigate } from "react-router-dom";
import Discount from "../icons/svg/off.svg";

import "./modal.css";

const Modal = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    document.getElementById("myModal").style.display = "none";
  };

  const handleNavigate = () => {
    navigate("/cancel-survey");
    document.getElementById("myModal").style.display = "none";
  };

  return (
    <div id="myModal" className="modal">
      <div className="modal-overlay">
        <div className="modal-body">
          <div className="modal-content">
            <div className="modal-content__top-img">
              <img src={Discount} alt="discount" />
            </div>
            <div className="modal-content__text">
              <h2>Before You Go...</h2>
              <h2>Would 50% Off For 6 Months Help?</h2>
              <p className="modal-content__text--p1">
                We know things REALLY suck in the world right now - and many
                businesses and freelancers are struggling to stay afloat during
                this COVID-19 crisis.
              </p>
              <p className="modal-content__text--p2">
                <b>
                  So if you could use the extra cushion, grab 50% off for 6
                  months.
                </b>
              </p>
              <p className="modal-content__text--p1">
                We hope you’re staying safe and healthy!
              </p>
              <div className="modal-content__btns">
                <button className="button-filled" onClick={handleNavigate}>
                  50 % OFF For 6 Months
                </button>
                <button className="button-no-borders" onClick={closeHandler}>
                  No, thanks! I’ll cancel
                </button>
              </div>
            </div>
            <button className="modal-content__close" onClick={closeHandler}>
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
