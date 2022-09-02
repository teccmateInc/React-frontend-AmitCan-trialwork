import "./textarea-stick.css";

const TextareaStick = ({ placeholder }) => {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <textarea
        rows={3}
        className="textarea-stick"
        placeholder={placeholder}
      ></textarea>
      <hr className="textarea-hr" />
    </div>
  );
};

export default TextareaStick;
