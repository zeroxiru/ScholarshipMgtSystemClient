import React, { useState } from 'react';
import ModeratorDelete from '../../Modal/ModeratorDelete';
import ModeratorUpdate from '../../Modal/ModeratorUpdate';
import ModeratorDelatils from '../../Modal/ModeratorDetails';
import { MdCancel } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FcViewDetails } from 'react-icons/fc';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const ModeratorMScholarshipDataRow = ({ scholarshipData, refetch, isDisabled = false }) => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const [deleteTargetId, setDeleteTargetId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [updateTargetId, setUpdateTargetId] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const {
        scholarshipName,
        universityName,
        subjectCategory,
        degree,
        scholarshipCategory,
        applicationFees,
        serviceCharge,
        applicationDeadline,
        _id
    } = scholarshipData;

    const openDeleteModal = (id) => {
        setDeleteTargetId(id); // Set the target ID for deletion
        setIsDeleteModalOpen(true); // Open the delete modal
    };
    const openUpdateModal = (id) => {
        setUpdateTargetId(id); // Set the target ID for update
        setIsUpdateModalOpen(true); // Open the update modal
    };
    const closeModal = () => {
        setIsDeleteModalOpen(false);
        setDeleteTargetId(null)
        setIsUpdateModalOpen(false);
        setUpdateTargetId(null)
    }
    const handleDelete = async () => {
        if (!deleteTargetId) return;

        try {
            await axiosSecure.delete(`/dashboard/moderator/scholarship/${deleteTargetId}`);
            refetch(); // Refresh the UI
            toast.success('Scholarship Deleted');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data || 'Error cancelling application');
        } finally {
            closeModal();
        }
    };
 // update the scholarship
 const handleUpdate = async (updatedData) => {
    if (!updateTargetId) return;
    console.log(updatedData);
    try {
      // Replace with your API endpoint and make sure `updateTargetId` is defined
      const response = await axiosSecure.put(
        `/dashboard/moderator/scholarship/${updateTargetId}`, // API endpoint
        updatedData // Data to update
      );
  
      console.log('Update Target ID:', updateTargetId);
      console.log('Updated Data:', updatedData);
  
      // Handle success response
      if (response.status === 200) {
        console.log('Updated successfully:', response.data);
        toast.success('Application updated successfully!');
        refetch(); // Refresh the data to reflect changes
      } else {
        throw new Error('Failed to update the application');
      }
    } catch (error) {
      // Log and display error
      console.error('Error updating application:', error.message);
      toast.error('Failed to update application. Please try again.');
    }
  };
  

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarshipName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{universityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{subjectCategory}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{degree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarshipCategory}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{applicationFees}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{serviceCharge}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{applicationDeadline}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <div
                    className={`relative ${isDisabled ? 'disabled:cursor-not-allowed opacity-50' : 'cursor-pointer'} inline-block px-3 py-1 font-semibold text-lime-900 leading-tight`}
                >
                    <div className='flex items-center space-x-4 text-center'>
                        <span
                            className='relative cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isDisabled) openDeleteModal(_id);
                            }}
                            title="Delete"
                        >
                            <MdCancel />
                        </span>
                        <span
                            className='relative cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!isDisabled) openUpdateModal(_id);
                            }}
                            title="Edit"
                        >
                            <CiEdit />
                        </span>
                        <span
                            className='relative cursor-pointer'
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('Clicked!');
                                if (!isDisabled) openDetailsModal(_id)
                            }}
                            title="View Details"
                        >
                            <FcViewDetails />
                        </span>
                    </div>
                </div>
                <ModeratorDelete isDeleteModalOpen={isDeleteModalOpen} 
                closeModal={closeModal} 
                handleDelete={handleDelete} />

                 <ModeratorUpdate
                 isUpdateModalOpen={isUpdateModalOpen}
                    closeModal={closeModal}
                    applicationData={scholarshipData}
                    onUpdate={handleUpdate}></ModeratorUpdate>
                    {/* {
                    isDetailsModalOpen && (
                        <ModeratorDetails
                    isDetailsModalOpen={isDetailsModalOpen}
                    closeModal={closeModal}
                    applicationData={detailsData}>
                    </ModeratorDetails>
                    )

                    }  */}
            </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <button onClick={openReviewModal} disabled={isDisabled} className={`${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <MdRateReview />
                </button>
                <MyApplicationReviewModal
                isReviewModalOpen={isReviewModalOpen}
                closeModal={closeModal}
                applicationData={AppData}
                user={user}
                >

                </MyApplicationReviewModal>
            </td> */}
        </tr>
    );
};

export default ModeratorMScholarshipDataRow;