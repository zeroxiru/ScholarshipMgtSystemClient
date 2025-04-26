import React from 'react';
import ExploreImage from '../../assets/images/data-analysis.png';
import CompareImage from '../../assets/images/compare.png';
import DecisionImage from '../../assets/images/archery.png';
import SubmitImage from '../../assets/images/submit.png';

const StepsComponent = () => {
  const steps = [
    {
      title: "Explore",
      description:
        "You can browse more than 10,000 Master's, Bachelor's and Diploma programmes from all over the world.",
      image: ExploreImage,
    },
    {
      title: "Compare",
      description:
        "Make a wishlist of your favourite programmes, check your fit with them, and read what other students are saying.",
      image: CompareImage,
    },
    {
      title: "Decide",
      description:
        "Now that you have your top programmes shortlisted, you can pick the ones that fit you the best.",
      image: DecisionImage,
    },
    {
      title: "Apply",
      description:
        "When you feel confident about your programme choice, you can apply.",
      image: SubmitImage,
    },
  ];

  return (
    <div className=" py-10 mt-5 dark: bg-gray-100">
      <div className="container mx-auto px-4 ">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 "
            >
              <div className="w-28 h-28 flex items-center justify-center border-2 border-primary rounded-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold  text-gray-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsComponent;
