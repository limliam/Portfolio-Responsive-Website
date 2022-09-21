import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import Me2 from "../../assets/avatar-main.png";

import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me2} alt="" className="home_img" />
        <h1 className="home_name">Liam Lim</h1>
        <span className="home_education">I am a Full-Stack developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Contact Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;