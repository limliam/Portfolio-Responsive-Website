import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import ImgMain from "../../assets/avatar-main2.png";

import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={ImgMain} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am Liam Lim, software engineer from Sydney, Australia. I have
              rich experience in web app development and building and
              customization. I am a full-stack developer and my favorite
              languages / tools are C#, ASP.NET Core, React and SqlServer /
              Firebase. Apart from my software engineering work, I am also a
              seasoned photographer, and enjoy cooking and archery.
            </p>
            <a href="#contact" className="btn">
              Request CV
            </a>
          </div>

          <div className="about_skills grid">
            {/* Skill items start */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">ASP.NET Core Web App / API</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage advanced"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">C#</h3>
                <span className="skills_number">90%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage advanced"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">React / Next.js </h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage beginner"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">
                  SqlServer / SQLite / Firebase / MongDB{" "}
                </h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage inter"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Azure App Service / AWS </h3>
                <span className="skills_number">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage beginner"></span>
              </div>
            </div>
            {/* Skill items end */}
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
