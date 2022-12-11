import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Home from "../../Components/Home/Home";
import Projects from "../../Components/Projects/Projects";


const Landing = () => {
  return (
    <div id="home" className="min-w-screen px-16">
      <Home/>
      <AboutMe/>
      <Projects/>
    </div>
  );
};

export default Landing;