import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import About from "../About/About";
import LoginScreen from "../LoginPage/Login";
import Navbar2 from "../../components/Navbar/Navbar2";
import Serivice from "../Services/Serivice";
import Blog from "../../components/Blog/Blog";
import Events from "../../Rough/Events";
import FetchAllData from "../../components/FetchData/FetchAllData";
import Users from "../../components/Users/Users";
import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  // const navigate = useNavigate();
  // const handleNavigate = () => {
  //   navigate("/SignUp");
  // };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signin");
  };
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Header />
        <About />
        <LoginScreen />
        <Navbar2 />
        <Serivice />
        <Blog />
        <Events />
        <FetchAllData />
        <Users />
        <button>
          <a href="SignUp">Register here</a>
        </button>
        <button>
          <Link to="/SignUp">SingUp</Link>
        </button>
        <button onClick={handleNavigate}>New user? Register Here</button>
        <div onClick={handleNavigate}>login here</div>
        <button>
          <Link to="/signin">Login</Link>
        </button>
        <div>
          <Link to="/upDateProfile">upDate Profile</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
