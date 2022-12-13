import React from 'react';
import EducationCard from './EducationCard';

const Training = () => {

    const training = {
        degree: "Complete Development Course",
        institute: "Programming Hero",
        year: "January 2022 - June 2022",
      };

    return (
    <div>
      <div className="relative max-w-2xl mx-auto mt-16">
        <div className="absolute top-0 h-full border-r-2 border-black left-3"></div>
        <ul className="space-y-2">
          <EducationCard key={training.id} education={training} />
        </ul>
      </div>
    </div>
    );
};

export default Training;