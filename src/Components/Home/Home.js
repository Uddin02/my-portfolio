import React from "react";
import Typed from "react-typed";
import image from "../../assets/arif.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row-reverse justify-around items-center pt-14">
        <img src={image} alt='' className="max-w-2xl" />
        <div className="">
          <h1 className="text-5xl font-bold">Hello There!</h1>
          <h1 className="text-3xl font-semibold mt-2">I'm <span className="text-primary">Arif Uddin</span></h1>
          <p className="py-4 text-xl font-bold">
            <Typed
            strings={[
              "I'm A MERN Stack Developer",
              "A Frontend Developer",
              "A Backend Developer",
              "A React.JS Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
            />
          </p>
          <a href="https://drive.google.com/file/d/1FSBwGCnG69RIR1d_w9-Sch90hpBe_Ylg/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-md btn-primary text-base-100">MY RESUME</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
