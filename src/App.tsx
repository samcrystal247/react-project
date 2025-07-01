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

// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import UserDetails from "./components/Users/UserDetails";
import UsersData from "./components/Users/UserDetails";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Signup from "./components/SignUp2/Signup (1)";
import LogIn2 from "./components/LogIn/LogIn2";
import LogIn from "./components/LogIn/LogIn2";
import LogInNew from "./components/LogIn/LogIn2";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";

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
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/UsersData/:id" element={<UsersData />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/signin" element={<LogInNew />} />
        <Route path="/upDateProfile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
