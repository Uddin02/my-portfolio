import React from "react";
import about from "../../assets/about-me.png";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <h2 className="ml-16 font-bold text-3xl text-primary">About <span className="border-b-4 border-secondary">Me</span></h2>
      <div className="min-h-screen">
        <div className="flex justify-around items-center pt-14">
          <img src={about} alt='' className="max-w-2xl " />
          <div className="ml-16">
            <p className="py-2 text-justify text-lg">Hi ! I’m Arif Uddin. I am Frontend Developer. I have about seven months of working experience on this field. If I discribe myself in one sentence then it will be <q> I am a quick learner. </q> I love to explore new things.</p>
            <p className="py-2 text-justify text-lg">I started my coding journey when I joined my B.Sc program . Coding is like a passion for me. I love to code all day long, and while my code works I feel proud of myself.</p>
            <button className="btn btn-primary text-base-100 mt-2">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
