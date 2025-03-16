import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewUpdateModal = ({isUpdateModalOpen, closeModal, ReviewData, onUpdate}) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: ReviewData,
      });

      const onSubmit = (data) => {
        onUpdate(data); // Call the update function with the updated data
        toast.success('Application updated successfully!');
        closeModal(); // Close the modal
      };
    
      const handleReset = () => {
        reset(ReviewData); // Reset form to initial state
        toast.info('Form reset to initial state');
      };

  if (!isUpdateModalOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Update Review
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Scholarship Name Field */}
            <div className="mb-4">
              <label
                htmlFor="scholarshipName"
                className="block text-sm font-medium text-gray-700"
              >
                Scholarship Name
              </label>
              <input
                type="text"
                id="scholarshipName"
                {...register("scholarshipName", { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
              />
            </div>
  
            {/* Comment Field */}
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700"
              >
                Comment
              </label>
              <textarea
                id="comment"
                {...register("comment", { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                rows="4"
              ></textarea>
            </div>
  
            {/* Review Date Field */}
            <div className="mb-4">
              <label
                htmlFor="reviewDate"
                className="block text-sm font-medium text-gray-700"
              >
                Review Date
              </label>
              <input
                type="date"
                id="reviewDate"
                {...register("reviewDate", { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:slate-blue-500 focus:slate-blue-500 sm:text-sm"
              />
            </div>
  
            {/* University Name Field */}
            <div className="mb-4">
              <label
                htmlFor="universityName"
                className="block text-sm font-medium text-gray-700"
              >
                University Name
              </label>
              <input
                type="text"
                id="universityName"
                {...register("universityName", { required: true })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
  
            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-slate-500 text-white rounded-lg hover:bg-slate-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default ReviewUpdateModal;