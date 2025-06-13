import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/SignUp/Register";
import About from "./Pages/About/About";
import Serivice from "./Pages/Services/Serivice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Serivice />} />
      </Routes>
    </>
  );
}

export default App;
