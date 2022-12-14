import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="service-card text-accent hover:text-white p-8 lg:p-12 ">
        <div className="text-left">
          <p className="text-5xl text-secondary">{icon}</p>
          <h2 className="font-semibold text-xl lg:text-3xl my-4 text-base-200">{title}</h2>
          <p className="text-md lg:text-base-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;