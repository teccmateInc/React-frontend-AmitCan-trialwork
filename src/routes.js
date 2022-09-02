import { BrowserRouter, Routes, Route } from "react-router-dom";
import CancelSurvey from "./pages/cancel-survey";
import Home from "./pages/home";

export default function AppRoutes({ children }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cancel-survey" element={<CancelSurvey />} />
      </Routes>
      {children}
    </BrowserRouter>
  );
}
