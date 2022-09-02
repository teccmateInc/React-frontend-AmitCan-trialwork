const TextWithIcon = ({ text, img }) => {
  return (
    <p
      style={{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "15px",
        lineHeight: "30px",
        letterSpacing: "0.26px",
        color: "#000000",
        marginBottom: 10,
      }}
    >
      {text}&nbsp;
      {img && <img src={img} alt="info" />}
    </p>
  );
};

export default TextWithIcon;
