import React from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Home from "../../Components/Home/Home";


const Landing = () => {
  return (
    <div id="home" className="min-w-screen px-16 bg-[#E7FEFF]">
      <Home/>
      <AboutMe/>
      {/* <Projects/> */}
    </div>
  );
};

export default Landing;