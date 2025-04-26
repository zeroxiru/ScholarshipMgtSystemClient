import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({scholarship}) => {
    
    const {universityName, universityImage, scholarshipCategory, universityCountry, universityCity,
        applicationDeadline, subjectCategory, applicationFees, _id, postDate
    } = scholarship || {} 
    //console.log(scholarship);
    
    return (
      <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-48 object-cover rounded-t-xl"
          src={universityImage}
          alt={`${universityName} Image`}
        />
      </figure>
      <div className="card-body justify-start dark: bg-white">
        <h2 className="card-title text-xl font-semibold text-gray-800">{universityName}</h2>
        <p className="text-sm text-gray-600 text-left">Scholarship Type: {scholarshipCategory}</p>
        <p className="text-sm text-gray-600 text-left">Subject: {subjectCategory}</p>
        <p className="text-sm text-gray-600 text-left">
         Location: {universityCity}, {universityCountry}
        </p>
        <p className="text-sm text-gray-600 text-left">
          Application Deadline: {applicationDeadline}
        </p>
        <p className="text-sm text-gray-600 text-left">
          Application Fees: ${applicationFees}
        </p>
        <p className="text-sm text-gray-500 text-left">
          Post Date: {new Date(postDate).toLocaleDateString()}
        </p>
      
        <div className="card-actions justify-end">
          <Link to={`/scholarship/${_id}`} className="btn bg-[#f6795d] hover:bg-orange-500 text-white">
            Scholarship Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Card;