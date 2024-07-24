import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";

import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import Footer from "./Components/Footer/Footer";

import "./Components/styles/App.css";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
