const Home = () => {
  return (
    <button
      style={{ marginTop: 20, marginLeft: 20 }}
      onClick={() =>
        (document.getElementById("myModal").style.display = "block")
      }
    >
      Click to view modal
    </button>
  );
};

export default Home;
