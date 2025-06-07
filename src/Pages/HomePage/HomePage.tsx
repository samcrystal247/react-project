import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import About from "../About/About";
import LoginScreen from "../LoginPage/Login";
import Navbar2 from "../../components/Navbar/Navbar2";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Header />
      <About />
      <LoginScreen />
      <Navbar2 />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default HomePage;
