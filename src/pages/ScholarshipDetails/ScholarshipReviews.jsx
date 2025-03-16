import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const ScholarshipReviews = ({ scholarshipId }) => {
    const {
      data: reviews = {},
      isLoading,
      error,
    } = useQuery({
      queryKey: ["reviews", scholarshipId],
      queryFn: async () => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/scholarships/${scholarshipId}/reviews`);
        console.log(data);
        
        return data; // Fallback to empty array
      },
    });

    // const {} = reviews
  
    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Error loading reviews.</p>;
  
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return <p className="text-center text-gray-500">No reviews available.</p>;
    }

  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
        <div className="reviews-container mt-8 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Scholarship Reviews</h2>
        <div className="reviews-grid grid gap-6 md:grid-cols-2 ">
          {reviews.map((review, index) => (
            <div key={review.id || index} className="p-4 border rounded-lg shadow-md bg-white ">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.userImage}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{review.userName}</h4>
                  <p className="text-sm text-gray-500">{review.reviewDate}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{review.comment}</p>
              <div className="text-yellow-500">Rating: {review.rating} / 5</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default ScholarshipReviews;
