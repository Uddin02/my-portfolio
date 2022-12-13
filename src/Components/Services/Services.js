import React from 'react';
import { FaCode, FaJsSquare, FaLayerGroup, FaReact, FaServer } from "react-icons/fa";
import ServiceCard from './ServiceCard';

const Services = () => {

    const serviceIProvide = [
        {
          id: 1,
          title: "Mern Development",
          description:
            "I'm a MERN Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
          icon: (
            <>
              <FaLayerGroup className='text-blue-500'/>
            </>
          ),
        },
        {
          id: 2,
          title: "Frontend Development",
          description:
            "I'm A Frontend specialist. I have created many Website With Fancy Frontend. I can be your frontend Engineer.",
          icon: (
            <>
              <FaCode className='text-blue-500' />
            </>
          ),
        },
        {
          id: 3,
          title: "Backend Development",
          description:
            "I'm A Backend Developer. I have created many projects Server Side Api Endpoint. I can be your Backend Developer.",
          icon: (
            <>
              <FaServer className='text-blue-500' />
            </>
          ),
        },
        {
          id: 4,
          title: "React Development",
          description:
            "I'm A React Developer. I have created many single page application using React.JS. I can be your React Developer.",
          icon: (
            <>
              <FaReact className='text-blue-500' />
            </>
          ),
        },
        {
          id: 5,
          title: "Javascript Development",
          description:
            "I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer.",
          icon: (
            <>
              <FaJsSquare className='text-yellow-400' />
            </>
          ),
        },
      ];
    

    return (
        <div id="services" className='my-10'>
            <h2 className="font-bold text-3xl text-primary my-5"><span className="border-b-4 border-secondary">Services</span></h2>
            <div data-aos="zoom-in" data-aos-duration="500">
                <p className="text-accent font-bold text-3xl lg:text-5xl mb-10">
                What I Do{" "}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {serviceIProvide.map((service) => (
                <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;