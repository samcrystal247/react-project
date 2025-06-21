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

const HomePage = () => {
  return (
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

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default HomePage;
