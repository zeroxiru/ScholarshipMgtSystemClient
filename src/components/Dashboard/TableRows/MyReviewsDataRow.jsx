import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { MdCancel } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import ReviewDeleteModal from '../../Modal/ReviewDeleteModal';
import ReviewUpdateModal from '../../Modal/ReviewUpdateModal';
import toast from 'react-hot-toast';

const MyReviewsDataRow = ({ ReviewData, refetch, isDisabled = false }) => {
    console.log(ReviewData);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const [deleteTargetId, setDeleteTargetId] = useState(null); // To track the item to delete
    const [updateTargetId, setUpdateTargetId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const {

        scholarshipName = "N/A",
        universityName = "N/A",
        comment = "No Comments",
        reviewDate = "unknown date",
        _id,
    } = ReviewData || {};

    const closeModal = () => {
        setIsDeleteModalOpen(false);
        setIsUpdateModalOpen(false);
        setDeleteTargetId(null);
        setUpdateTargetId(null)
    }
    const openDeleteModal = (id) => {
        setDeleteTargetId(id); // Set the target ID for deletion
        setIsDeleteModalOpen(true); // Open the delete modal
    };
    const openUpdateModal = (id) => {
        setUpdateTargetId(id); // Set the target ID for update
        setIsUpdateModalOpen(true); // Open the update modal
    };
    const handleDelete = async () => {
        if (!deleteTargetId) return;

        try {
            await axiosSecure.delete(`/dashboard/review/${deleteTargetId}`);
            refetch(); // Refresh the UI
            toast.success('Review Deleted');
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data || 'Error cancelling review');
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
            `/dashboard/review/${updateTargetId}`, // API endpoint
            updatedData // Data to update
          );
      
          console.log('Update Target ID:', updateTargetId);
          console.log('Updated Data:', updatedData);
      
          // Handle success response
          if (response.status === 200) {
            console.log('Updated successfully:', response.data);
            toast.success('Review updated successfully!');
            refetch(); // Refresh the data to reflect changes
          } else {
            throw new Error('Failed to update the review');
          }
        } catch (error) {
          // Log and display error
          console.error('Error updating review:', error.message);
          toast.error('Failed to update review. Please try again.');
        }
      };
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarshipName.split(' ').slice(0, 4).join(' ')}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{universityName}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{comment.split(' ').slice(0, 4).join(' ')}..</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'>
                <p className='text-gray-900 whitespace-no-wrap'>{reviewDate}</p>
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

                    </div>
                </div>
               <ReviewDeleteModal isDeleteModalOpen={isDeleteModalOpen}
                    closeModal={closeModal}
                    handleDelete={handleDelete} />

                  <ReviewUpdateModal
                    isUpdateModalOpen={isUpdateModalOpen}
                    closeModal={closeModal}
                    ReviewData={ReviewData}
                    onUpdate={handleUpdate}></ReviewUpdateModal> 

            </td>

        </tr>
    );
};

export default MyReviewsDataRow;