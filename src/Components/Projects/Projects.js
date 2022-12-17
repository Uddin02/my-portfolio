import React from 'react';
import alpha_tour from '../../assets/alpha-tour.png';
import course_hub from '../../assets/course-hub.png';
import resell_hub from '../../assets/resell-hub.png';

import Modal from "react-modal";
import ProjectCard from './ProjectCard';
Modal.setAppElement("#root");

const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "Resell Hub",
          name: "Used Products Web App",
          image: resell_hub,
          links: {
            live: "https://resell-hub.web.app",
            client: "https://github.com/Uddin02/resell-hub-client-side",
            server: "https://github.com/Uddin02/resell-hub-server-side",
          },
        },
        {
          id: 2,
          title: "Alpha Tour",
          name: "Service Review Web Site",
          image: alpha_tour,
          links: {
            live: "https://alpha-tour-e6555.web.app/",
            client: "https://github.com/Uddin02/alpha-tour-client",
            server: "https://github.com/Uddin02/alpha-tour-server",
          },
        },
        {
          id: 3,
          title: "Course Hub",
          name: "Online Course Site",
          image: course_hub,
          links: {
            live: "https://course-hub-74fb9.web.app/",
            client: "https://github.com/Uddin02/course-hub-client",
            server: "https://github.com/Uddin02/course-hub-server",
          },
        },
      ];

    return (
        <div id='projects' className="text-white max-w-full mt-14">
          <div data-aos="zoom-in" data-aos-duration="500">
            <p className="text-secondary font-bold text-3xl mb-10">My Full Stack <span className='border-b-4 border-secondary'>Projects</span></p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
    );
};

export default Projects;