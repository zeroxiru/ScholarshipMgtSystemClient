import React from 'react';
import MyReviewsDataRow from '../../../components/Dashboard/TableRows/MyReviewsDataRow';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: reviews = [],
        isLoading,
        refetch
      } = useQuery({
        queryKey: ['reviews', user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure(`/dashboard/my-reviews/${user?.email}`)
          return data
          
        }
      })
     // console.log(reviews);
    return (
        <>
        <Helmet>
          <title>My Reviews</title>
        </Helmet>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                      >
                        Scholarship Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                      >
                       University Name
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                      >
                       Review Comments
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                      >
                        Review Date
                      </th>
                     
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                      >
                        Action
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map(ReviewData => (<MyReviewsDataRow 
                    key={ReviewData._id}
                    ReviewData= {ReviewData}
                    refetch={refetch}
                    ></MyReviewsDataRow>))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default MyReviews;