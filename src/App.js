import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import ContactForm from "./Components/ContactForm";
import "./Styles/Utility.scss";
import "./Styles/App.scss";
import "./Styles/Theme.scss";
import darkModeImage from "./Assets/darkMode.png";
import lightModeImage from "./Assets/lightMode.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <button className="modeChanger" onClick={toggleDarkMode}>
          <img
            className="modeChangerImage"
            src={darkMode ? darkModeImage : lightModeImage}
            alt=""
          />
        </button>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
