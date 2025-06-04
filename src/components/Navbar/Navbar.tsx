import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const firstName = "Henry Jay";
  console.log(firstName);
  const navigate = useNavigate();
  const Sam = () => {
    navigate("/About us");
  };
  return (
    <div>
      <h3 className="smaple-h3"> my name is samuel</h3>
      <h2 style={{ color: "red", fontSize: "50px" }}>
        I love my country, Nigeria
      </h2>
      <p style={{ backgroundColor: "yellow", height: "100px", color: "green" }}>
        how are you?
      </p>
      <h1 className="firstname">{firstName}</h1>
      <p>
        <a href="/Login">Login</a>
        <a href="/register">Register</a>
        <p onClick={Sam}>About us</p>
      </p>
    </div>
  );
};

export default Navbar;
