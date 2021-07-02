import React from 'react';

export const SubHeader: React.FC = () => {
  return (
    <div
      className="flex flex-col font-sans mx-auto text-sd-brgreen text-2xl font-normal text-left w-4/6 mt-8"
    >
      <div>
        In digital age, we are facing lots of challenges which big commpany not willing to solve. 
        <span className="font-semibold"> Information overload</span>, 
        <span className="font-semibold"> Fake news</span> and 
        <span className="font-semibold"> Polarization</span>.
        In order to solve these problems for good, we need radical solution.
      </div>
      <div 
        className="mt-4"
      >
        Totuslink try to light up the path with one approach:
      </div>
      <div
        className="mt-4 font-bold"
      >
        Remove list structure.
      </div>
    </div>
  )
};