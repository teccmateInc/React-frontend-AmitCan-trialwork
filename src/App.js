import AppRoutes from "./routes";

import "./App.css";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#333333", height: 60, width: "100%" }} />
      <AppRoutes>
        <Modal />
      </AppRoutes>
    </>
  );
}

export default App;
