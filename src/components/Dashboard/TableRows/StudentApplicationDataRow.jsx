import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { MdCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import toast from 'react-hot-toast';
import { MdRateReview } from "react-icons/md";
import DeleteModal from '../../Modal/DeleteModal';
import MyApplicationUpdateModal from '../../Modal/MyApplicationUpdateModal ';
import axios from 'axios';
import DetailsModal from '../../Modal/DetailsModal';
import MyApplicationReviewModal from '../../Modal/MyApplicationReviewModal';
import useAuth from '../../../hooks/useAuth';

const StudentApplicationDataRow = ({ AppData, refetch, isDisabled = false }) => {
    //console.log(AppData, refetch, isDisabled);
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const [deleteTargetId, setDeleteTargetId] = useState(null); // To track the item to delete
    const [updateTargetId, setUpdateTargetId] = useState(null); // To track the item to update
    const [detailsData, setDetailsData] = useState(null); 
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    const closeModal = () => {
        setIsDeleteModalOpen(false); 
        setIsUpdateModalOpen(false); 
        setIsDetailsModalOpen(false);
        setIsReviewModalOpen(false);
        setDeleteTargetId(null); 
        setUpdateTargetId(null)
        setDetailsData(null)
    };
    const openDeleteModal = (id) => {
        setDeleteTargetId(id); // Set the target ID for deletion
        setIsDeleteModalOpen(true); // Open the delete modal
    };
    const openUpdateModal = (id) => {
        setUpdateTargetId(id); // Set the target ID for update
        setIsUpdateModalOpen(true); // Open the update modal
    };
    
    const openDetailsModal = async (id) => {
        try {
            const response = await axiosSecure.get(`/dashboard/applications/${id}`);
            setDetailsData(response.data); // Set the full details
            setIsDetailsModalOpen(true); // Open the modal
        } catch (error) {
            console.error('Failed to fetch details:', error);
            toast.error('Failed to fetch details.');
        }
    };
    const openReviewModal = async (id) => {
        setIsReviewModalOpen(true);
     }
   
    const {
        
        universityName,
        universityAddress,
        applicationFeedBack,
        subjectCategory,
        appliedDegree,
        applicationFees,
        serviceCharge,
        applicationStatus,
        _id
    } = AppData;

    const handleDelete = async () => {
        if (!deleteTargetId) return;

        try {
            await axiosSecure.delete(`/dashboard/applications/${deleteTargetId}`);
            refetch(); // Refresh the UI
            toast.success('Application Deleted');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data || 'Error cancelling application');
        } finally {
            closeModal();
        }
    };

    

    const handleUpdate = async (updatedData) => {
        if (!updateTargetId) return;
        console.log(updatedData);
        try {
          // Replace with your API endpoint and make sure `updateTargetId` is defined
          const response = await axiosSecure.put(
            `/dashboard/applications/${updateTargetId}`, // API endpoint
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
                <p className='text-gray-900 whitespace-no-wrap'>{universityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{universityAddress}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{applicationFeedBack}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{subjectCategory}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{appliedDegree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{applicationFees}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{serviceCharge}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{applicationStatus}</p>
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
                <DeleteModal isDeleteModalOpen={isDeleteModalOpen} 
                closeModal={closeModal} 
                handleDelete={handleDelete} />

                <MyApplicationUpdateModal
                 isUpdateModalOpen={isUpdateModalOpen}
                    closeModal={closeModal}
                    applicationData={AppData}
                    onUpdate={handleUpdate}></MyApplicationUpdateModal>
                    {
                    isDetailsModalOpen && (
                        <DetailsModal
                    isDetailsModalOpen={isDetailsModalOpen}
                    closeModal={closeModal}
                    applicationData={detailsData}>
                    </DetailsModal>
                    )

                    }
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
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
            </td>
        </tr>
    );
};

export default StudentApplicationDataRow;
