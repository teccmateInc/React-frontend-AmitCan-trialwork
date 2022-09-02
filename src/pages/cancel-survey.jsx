import RadioStick from "../components/radio-stick";
import Warning from "../icons/svg/warning.svg";
import BackArrow from "../icons/svg/back-arrow.svg";
import Info from "../icons/svg/info.svg";

import "./cancel-survey.css";
import TextareaStick from "../components/textarea-stick";
import TextWithIcon from "../components/text-with-icon";
import SelectStick from "../components/select-stick";
import ButtonRadio from "../components/button-radio";

const BugStick = () => {
  return (
    <>
      <TextWithIcon
        text={"Which product(s) did you have an issue with?"}
        img={Info}
      />
      <SelectStick placeholder="Select Product(s)" />
      <hr
        style={{
          marginBottom: 30,
          marginTop: 30,
          borderTop: "1px solid #EFEFEF",
        }}
      />
      <TextWithIcon text={"What was it?"} />
      <ButtonRadio name="problem" />
      <hr
        style={{
          marginBottom: 30,
          marginTop: 30,
          borderTop: "1px solid #EFEFEF",
        }}
      />
      <TextWithIcon text={"What problem(s) did you encounter?"} img={Info} />
      <TextareaStick placeholder={""} />
    </>
  );
};

const TextareaStickWithPlaceholder = () => {
  return (
    <TextareaStick
      placeholder={
        "What is the better solution? If you don’t mind sharing. Your feedback is much appreaciated!"
      }
    />
  );
};

const radiosData = [
  {
    id: 1,
    text: "I didn't realize it was a recurring membership",
    extraComponent: false,
  },
  {
    id: 2,
    text: "Found a better solution",
    extraComponent: true,
    ExtraComp: TextareaStickWithPlaceholder,
  },
  {
    id: 3,
    text: "It's too expensive",
    extraComponent: false,
  },
  {
    id: 4,
    text: "Bugs, things not working properly",
    extraComponent: true,
    ExtraComp: BugStick,
  },
  {
    id: 5,
    text: "I just want to pay for a single plugin",
    extraComponent: false,
  },
  {
    id: 6,
    text: "Not using WordPress anymore",
    extraComponent: false,
  },
  {
    id: 7,
    text: "Other",
    extraComponent: false,
  },
];

const CancelSurvey = () => {
  return (
    <div className="cancel-survey">
      <div className="cancel-survey__align">
        <div className="cancel-survey__header">
          <div>&lt;</div>
          <h4>Cancellation Survey</h4>
        </div>
        <hr />
        <div className="cancel-survey__content">
          <h2>We're sad to see you go...</h2>
          <p>Can you tell us why you want to cancel you membership</p>
          <div className="cancel-survey__reasons">
            {radiosData.map((rad) => (
              <RadioStick key={rad.id} rad={rad} />
            ))}
          </div>
          <div>
            <div className="cancel-survey__warning">
              <img src={Warning} alt="warning" />
              <p>
                Are you absolutely sure you want to cancel? If you do you'll
                lose access to so many cool things. And you'll lose the chance
                to stay on this plan at the same cost ongoing (regardless of
                future price increases).
              </p>
            </div>
            <div className="cancel-survey__btn">
              <button className="cancel-survey__btn-1">
                <img src={BackArrow} alt="back arrow" />
                &nbsp;Back
              </button>
              <button className="cancel-survey__btn-2">
                Cancel Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelSurvey;
