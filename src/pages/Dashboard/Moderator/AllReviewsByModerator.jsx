import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";

const AllReviewsByModerator = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  // Fetch all reviews from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axiosSecure.get(`/dashboard/moderator/reviews`);
        setReviews(response.data); // Update reviews state with API response
           
       } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Failed to fetch reviews");
      }
    };
   
    fetchReviews();
  }, [axiosSecure]);
  console.log(reviews); 

  // Handle delete review
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/dashboard/moderator/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id)); // Remove deleted review from UI
      toast.success("Review deleted successfully");
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Failed to delete review");
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     console.log("Deleting review with ID:", id); // Debug log
  //     await axiosSecure.delete(`/dashboard/moderator/reviews/${id}`);
  //     setReviews(reviews.filter((review) => review._id !== id));
  //     toast.success("Review deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting review:", error.response?.data || error.message);
  //     toast.error("Failed to delete review");
  //   }
  // };
  const openModal = (reviewId) => {
    setSelectedReviewId(reviewId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReviewId(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedReviewId) {
      handleDelete(selectedReviewId);
    }
    closeModal();
  };
  if(isLoading) return <LoadingSpinner></LoadingSpinner>

  return (
    <div className="p-5 dark:text-black dark: bg-white">
    <h1 className="text-2xl font-bold mb-5 text-center">All Reviews</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="card w-full bg-base-1 shadow-md border border-gray-300 dark: bg-white"
        >
          {/* Reviewer Image */}
          <figure className="p-4">
            <img
              src={review.userImage || "/default-avatar.png"}
              alt="Reviewer"
              className="rounded-full w-20 h-20 mx-auto border-4 border-gray-200"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body items-center text-center">
            <h2 className="card-title">{review?.userName}</h2>
            <p className="text-sm text-gray-500">{review?.reviewDate}</p>
            <div className="mt-3 text-left w-full">
              <p className="text-sm">
                <strong>University:</strong> {review?.universityName}
              </p>
              <p className="text-sm">
                <strong>Subject:</strong> {review?.subjectCategory}
              </p>
              <p className="text-sm">
                <strong>Rating:</strong> {review?.rating} / 5
              </p>
              <p className="text-sm">
                <strong>Comments:</strong> {review?.comment}
              </p>
            </div>

            {/* Delete Button */}
            <div className="card-actions mt-4">
              <button
                onClick={() => openModal(review._id)}
                className="btn btn-error btn-sm flex items-center"
              >
                <MdDelete className="mr-1" /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Confirmation Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this review? This action cannot be
            undone.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={confirmDelete}
              className="btn btn-error btn-sm"
            >
              Yes, Delete
            </button>
            <button
              onClick={closeModal}
              className="btn btn-secondary btn-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};
 
export default AllReviewsByModerator;
