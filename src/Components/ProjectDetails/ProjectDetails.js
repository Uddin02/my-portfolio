import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alpha_tour from "../../assets/alpha-tour.png";
import course_hub from "../../assets/course-hub.png";
import resell_hub from "../../assets/resell-hub.png";
import "./PorjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = [
    {
      id: 1,
      title: "Resell Hub",
      name: "Used Products Web App",
      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "This site has different features for different roles. There is two role admin and user.",
        "You can pay using your credit card.",
        "Admin can upload a product or delete a product and admin take any action for a user.",
        "This site is protected using JsonWebToken",
      ],
      image: resell_hub,
      links: {
        live: "https://resell-hub.web.app",
        client: "https://github.com/Uddin02/resell-hub-client-side",
        server: "https://github.com/Uddin02/resell-hub-server-side",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React.Js",
        "Tailwind",
        "DaisyUI",
        "Axios",
        "TanStackQuery",
        "React Hook Form",
        "Expres.Js",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Firebase",
        "JWT"
      ],
    },
    {
      id: 2,
      title: "Alpha Tour",
      name: "Service Review Web Site",
      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "Service website including admin panel to add or remove services.",
        "Form to leave review for the clients for a specific service.",
        "Option for Admin to add more services to homepage and this service will be sorted as a recently added service.",
        "You can see user reviews . what they think about us and how they feel.",
        "This site is protected using JsonWebToken",
      ],
      image: alpha_tour,
      links: {
        live: "https://alpha-tour-e6555.web.app/",
        client: "https://github.com/Uddin02/alpha-tour-client",
        server: "https://github.com/Uddin02/alpha-tour-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyUI",
        "ExpresJs",
        "MongoDB",
        "Firebase",
        "JWT"
      ],
    },
    {
      id: 3,
      title: "Course Hub",
      name: "Online Course Site",
      description: [
        "This site includes a firebase email-password-based and google authentication system.",
        "Course hub website including the six core topics which are loaded by the custom API.",
        "Course detail page is a private route if you are not logged in it will redirect you to the login page.",
        "Course hub website is also responsive for small and large devices.",
      ],
      image: course_hub,
      links: {
        live: "https://course-hub-74fb9.web.app/",
        client: "https://github.com/Uddin02/course-hub-client",
        server: "https://github.com/Uddin02/course-hub-server",
      },
      technology: [
        "Html",
        "Css",
        "JavaScript",
        "React",
        "Tailwind",
        "DaisyU",
        "ExpresJs",
        "MongoDB",
        "Stripe",
        "Firebase"
      ],
    },
  ];

  useEffect(() => {
    const project = projects.find((x) => x.id === +id);
    setProject(project);
  }, [id, projects]);

  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      className="detail-card  p-5 px-10 hover:text-white bg-[#E7FEFF]"
    >
      <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[70vh] text-left mb-32">
        <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
          <img src={project.image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
          <div>
            <h2 className="font-bold text-xl my-2 text-secondary">
              {project.title}
            </h2>
            <h2 className="project-title text-accent font-semibold text-xl my-4">
              {project.name}
            </h2>
            <div className="my-4">
              <h3 className=" text-secondary pb-2">Project Overview</h3>
              {project?.description?.map((point, index) => (
                <p key={index} className="text-accent">
                  {index + 1}. {point}
                </p>
              ))}
            </div>
          </div>
          <div className="button-content flex justify-between mt-5">
            <a
              href={project?.links?.live}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-solid fa-circle-dot"></i>
              View Live
            </a>
            <a
              href={project?.links?.client}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Client Code
            </a>
            <a
              href={project?.links?.server}
              target="_blank"
              rel="noreferrer"
              className="project-button text-[10px] lg:text-[12px]"
            >
              {" "}
              <i className="text-sm text-secondary mr-2 fa-brands fa-github"></i>
              Server Code
            </a>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default ProjectDetails;
