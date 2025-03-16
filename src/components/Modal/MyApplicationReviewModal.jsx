import React, { useCallback, useState } from 'react';
import { axiosSecure } from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';

const MyApplicationReviewModal = ({ isReviewModalOpen, closeModal, applicationData, user }) => {
    console.log(applicationData, user);
    const [reviewData, setReviewData] = useState({
        rating: 0,
        comment: "",
        reviewDate: new Date().toISOString().slice(0, 10)
    })
    const handleRatingChange = ratingValue => {

        setReviewData(prev => ({
            ...prev,
            rating: ratingValue
        }));
    }
    const handleInputChange = e => {
        const { name, value } = e.target;
        setReviewData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const submitReview =useCallback( async() => {
        const newReview = {
            ...reviewData,
            scholarshipName: applicationData.scholarshipName,
            universityName: applicationData.universityName,
            scholarshipId: applicationData.scholarshipId,
            userName: user?.displayName,
            userImage: user?.photoURL,
            userEmail: user?.email || null,
        }

        try{ 
            const response = await axiosSecure.post('/dashboard/reviews', newReview);
            toast.success('Review Data added successfully')
            
        }
        catch (error) {
            console.error(error);
            toast.error(error.response?.data || 'Error cancelling application');
        } finally {
            closeModal();
        }
    });
    return (
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 ${isReviewModalOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="bg-white rounded-lg p-6 w-1/2">
                <h2 className="text-xl font-semibold mb-4">Add Review</h2>

                <div className="space-y-4">
                    {/* Rating Input */}
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Rating:</span>
                        {[1, 2, 3, 4, 5].map((ratingValue) => (
                            <FaStar
                                key={ratingValue}
                                size={24}
                                className={`cursor-pointer ${ratingValue <= reviewData.rating ? 'text-yellow-500' : 'text-gray-400'
                                    }`}
                                onClick={() => handleRatingChange(ratingValue)}
                            />
                        ))}
                    </div>

                    {/* Review Comment */}
                    <textarea
                        name="comment"
                        placeholder="Your review"
                        className="textarea textarea-bordered w-full"
                        value={reviewData.comment}
                        onChange={handleInputChange}
                    />

                    {/* Review Date */}
                    <input
                        type="date"
                        name="reviewDate"
                        className="input input-bordered w-full"
                        value={reviewData.reviewDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        onClick={closeModal}
                        className="btn btn-secondary mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={submitReview}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApplicationReviewModal;