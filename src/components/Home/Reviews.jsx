import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((response) =>
         {  console.log(response);
            setReviews(response.data)
         })
      .catch((error) => console.error("Error fetching reviews:", error));
      
  }, []);

  return (
    <div className="text-center mt-10 dark:text-gray-300">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
        Customer Reviews & Experiences
      </h2>
      <p className="mt-2 px-3">
        Hear from our happy customers! See what they have to say about our services and exclusive offers.
      </p>

      <div className="my-10 w-80 sm:w-[560px] md:w-[760px] lg:w-[920px] xl:w-[1100px] mx-auto">
        <Swiper
          breakpoints={{
            slidesPerView: 1,
            560: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1200: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide className="mb-10" key={idx}>
              <div className="card rounded-md bg-gray-100 w-80 dark:bg-gray-100 relative">
                <div className="card-body gap-0 text-gray-600 text-justify shadow-lg mb-1 flex flex-col justify-between min-h-[200px]">
                  <p>{review.comment}</p>
                  <h3 className="text-lg font-bold mt-1">{review.userName}</h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    edit={false}
                    size={24}
                    isHalf={true}
                    activeColor="#FFB116"
                  />
                  <p className="mb-2">{review.universityName}</p>
                </div>
                <figure className="absolute w-16 h-16 rounded-full -bottom-9 left-1/2 -translate-x-1/2 outline">
                  <img className="w-full h-full rounded-full" src={review.userImage} alt="User" />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
