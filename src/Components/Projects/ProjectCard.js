import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FcRightUp2 } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Project.css";

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    image,
    name,
    links: { live },
  } = project;

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="portfolio-card text-accent hover:text-white w-96"
    >
      <div className="text-left">
        <div className="image-content w-full rounded-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div>
          <h2 className="font-semibold text-lg my-4 text-base-100">{title}</h2>
          <h2 className="project-title text-base-100 font-semibold text-2xl flex ">
            {name}<FcRightUp2 className="title-icon ml-2 "/>
            {/* <i className="title-icon text-primary ml-2 fa-solid fa-arrow-turn-up"></i> */}
            
          </h2>
        </div>
        <div className="button-content flex justify-between mt-5">
          <Link
            className="project-button text-[10px] lg:text-[12px]"
            to={`/project/${id}`}
          >
            {/* <i className="text-sm text-primary mr-2 fa-solid fa-circle-dot"></i> */}
            <FaDotCircle className="text-sm text-base-100 mr-2"/>
            View Details
          </Link>
          <Link
            className="project-button text-[10px] lg:text-[12px] w-28"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            <FaDotCircle className="text-sm text-base-100 mr-2"/>
            View Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
