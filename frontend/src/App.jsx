import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
// import "style.css"

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <Router>
      <Navbar />
      <button onClick={onClose}>Закрыть</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
