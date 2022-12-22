import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Contact from "../../Components/Contact/Contact";
import Home from "../../Components/Home/Home";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Services/Services";


const Landing = () => {
  return (

      <div id="home" className="min-w-screen px-16 bg-[#E7FEFF]">
        <Home/>
        <AboutMe/>
        <Services/>
        <Projects />
        <Contact />
      </div>

  );
};

export default Landing;