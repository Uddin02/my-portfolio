import React from "react";
import image from "../../assets/arif.png";

const Home = () => {
  return (
    <div className="min-h-screen">
  <div className="flex flex-row-reverse justify-around items-center">
    <img src={image} alt='' className="max-w-2xl" />
    <div className="">
      <h1 className="text-5xl font-bold">Hello There!</h1>
      <h1 className="text-3xl font-semibold mt-2">I'm <span className="text-primary">Arif Uddin</span></h1>
      <p className="py-4 font-bold">MERN Stack Developer</p>
      <button className="btn btn-primary text-base-100">More About Me</button>
    </div>
  </div>
</div>
  );
};

export default Home;
