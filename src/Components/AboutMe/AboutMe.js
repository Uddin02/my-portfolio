import React, { useState } from "react";
import about from "../../assets/about-me.png";
import "./AboutMe.css";
import Education from "./Education";
import Skills from "./Skills";
import Training from "./Training";

const AboutMe = () => {

  const [skill, setSkill] = useState(true);
  const [education, setEducation] = useState(false);
  const [training, setTraining] = useState(false);

  const handleSkill = () => {
    setSkill(true);
    setEducation(false);
    setTraining(false);
  };
  const handleEducation = () => {
    setSkill(false);
    setEducation(true);
    setTraining(false);
  };
  const handleTraining = () => {
    setSkill(false);
    setEducation(false);
    setTraining(true);
  };

  return (
    <div id="aboutme" >
      <h2 className="ml-16 font-bold text-3xl text-primary">About <span className="border-b-4 border-secondary">Me</span></h2>
      <div className="min-h-[50vh]">
        <div className="flex justify-around items-center pt-14">
          <img data-aos="fade-left" data-aos-duration="400" src={about} alt='' className="max-w-2xl " />
          <div className="ml-16">
            <p className="py-2 text-justify text-lg">Hi ! I’m Arif Uddin. I am Frontend Developer. I have about seven months of working experience on this field. If I discribe myself in one sentence then it will be <q> I am a quick learner. </q> I love to explore new things.</p>
            <p className="py-2 text-justify text-lg">I started my coding journey when I joined my B.Sc program . Coding is like a passion for me. I love to code all day long, and while my code works I feel proud of myself.</p>
            <a href='https://drive.google.com/file/d/1_hQlcHc2UtqgVPZCL7O2HLghEhUtHMzc/view?usp=sharing' target="_blank" rel="noreferrer" className="btn btn-primary text-base-100 mt-2">Download CV</a>
          </div>
        </div>
      </div>

      <div className="mt-16 ">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="tab-button-content w-full"
        >
          <label
            onClick={handleSkill}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${skill && "active-tab"
              } w-1/3`}
          >
            Professional Skills
          </label>
          <label
            onClick={handleEducation}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${education && "active-tab"
              } w-1/3`}
            aria-current="page"
          >
            Education
          </label>
          <label
            onClick={handleTraining}
            className={`tab-button py-7 px-14  text-xs lg:text-base ${training && "active-tab"
              } w-1/3`}
          >
            Professional Training
          </label>
        </div>
        <div>
          <div id="skill" className={`${skill ? "block" : "hidden"}`}>
            <Skills/>
          </div>
          <div id="education" className={`${education ? "block" : "hidden"}`}>
            <Education/>
          </div>
          <div id="training" className={`${training ? "block" : "hidden"}`}>
            <Training/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
