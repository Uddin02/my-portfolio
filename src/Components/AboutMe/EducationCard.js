import React from 'react';

const EducationCard = ({ education }) => {
    const { degree, institute, year } = education;
    return (
        <li>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1500"
        className="timeline-card flex items-center mb-10"
      >
        <div className="education-card p-5 lg:p-10 ml-10 text-left text-accent">
          <p className="text-xl text-white font-semibold border-b-2 my-3 pb-2">{degree}</p>
          <p className='text-white'>{institute}</p>
          <p className='text-white'>{year}</p>
        </div>
      </div>
    </li>
    );
};

export default EducationCard;