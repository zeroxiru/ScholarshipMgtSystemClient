import React from 'react';
import Container from '../../pages/Shared/Container';
import Heading from '../shared/Heading';

const DetailsModal = ({ isDetailsModalOpen, closeModal, applicationData }) => {
  if (!isDetailsModalOpen || !applicationData) return null;

  const {
    universityImage,
    universityName,
    scholarshipCategory,
    subjectCategory,
    scholarshipDescription,
    date,
    applicationStatus,
    status,
    tuitionFees,
    applicationFees,
    applicationDeadline,
    universityWorldRank,
    serviceCharge
  } = applicationData;

  return (
    <Container>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2">
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Scholarship Details</h2>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Modal Content */}
          <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12 px-6 py-4">
            {/* Left Section - Image */}
            <div className="flex-1">
              <div className="overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full"
                  src={universityImage}
                  alt={universityName || 'University'}
                />
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="flex-1 space-y-6">
              <Heading
                title={universityName || 'N/A'}
                subtitle={`Category: ${scholarshipCategory || 'N/A'}`}
                center
              />
              <hr className="my-4" />
              <div className="text-lg font-light text-neutral-500 space-y-2">
                <p>
                  <span className="font-semibold">Subject Category:</span>{' '}
                  {subjectCategory || 'N/A'}
                </p>
                <p>
                  <span className="font-semibold">Description:</span>{' '}
                  {scholarshipDescription || 'N/A'}
                </p>
                <p>
                  <span className="font-semibold">Date Applied:</span>{' '}
                  {new Date(date).toLocaleDateString() || 'N/A'}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <p className="font-bold text-md text-gray-600">
                  Application Status: {applicationStatus || status || 'N/A'}
                </p>
                <p className="font-bold text-md text-gray-600">
                  Tuition Fees: {tuitionFees ||  'N/A'}
                </p>
                <p className="font-bold text-md text-gray-600">
                  Application Fees: {applicationFees || 'N/A'}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center gap-5">
                <p className="font-bold text-md text-gray-600">
                  Service Charge: {serviceCharge || status || 'N/A'}
                </p>
                <p className="font-bold text-md text-gray-600">
                  University Rank: {universityWorldRank ||  'N/A'}
                </p>
                <p className="font-bold text-md text-gray-600 s">
                  Application Deadline: {applicationDeadline || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailsModal;
