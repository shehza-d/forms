import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup/index";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
// import { Link } from "react-router-dom";

// Importing Font?
// <style>
// @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;800&display=swap');
// </style>



const App = () => {
  // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');nnif (prefersDarkScheme.matches) {n  document.body.classList.add('dark-theme');n} else {n  document.body.classList.remove('dark-theme');n}
  const [themeMode, setThemeMode] = useState("dark");

  const toggleThemeMode = () => {
    if (themeMode === "dark") setThemeMode("light");
    else setThemeMode("dark");
    // console.log(themeMode)
  };

  return (
    <div className={`App ${themeMode === "dark" ? "dark" : "light"}`}>
      <button type="button" className="themeBtn" onClick={toggleThemeMode}>
        {themeMode === "light" ? <BsFillMoonFill /> : <BsSun />}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
