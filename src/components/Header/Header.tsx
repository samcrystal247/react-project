import React from "react";
import logo from "../../assets/avatar_on_home.png";
import "./Header.css";
import bgimg from "../../assets/header-hero.jpg";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { BiSolidUserAccount } from "react-icons/bi";
import { CgMenuLeft } from "react-icons/cg";
const Header = () => {
  return (
    <div>
      <h2> Love</h2>
      <img src={logo} />
      <div className="header-bg-img"></div>
      <div style={{ backgroundImage: `url(${bgimg})`, height: "50px" }}></div>
      <TiSocialLinkedin className="linkedin-icon" />
      <BiSolidUserAccount />
      <TiSocialFacebook />

      <CgMenuLeft style={{ color: "yellowgreen", fontSize: "80px" }} />
    </div>
  );
};

export default Header;
