import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import Container from '../Shared/Container';
import { Helmet } from 'react-helmet-async';
import Heading from '../../components/shared/Heading';
import ApplyScholarshipModal from '../../components/Modal/applyScholarshipModal';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ScholarshipReviews from './ScholarshipReviews';
import PaymentModal from '../../components/Modal/PaymentModal';
import useAuth from '../../hooks/useAuth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KE)


const ScholarshipDetails = () => {
  const axiosSecure = useAxiosSecure()
  const { id } = useParams();
  const navigate = useNavigate();
  const {user} = useAuth()

  const { data: scholarship = {},
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['scholarships', 'id'],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/scholarships/${id}`
        //  `${import.meta.env.VITE_API_URL}/scholarships?`
      )
      return data
    }
  })
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const { universityName, universityImage, scholarshipCategory, subjectCategory, universityCountry, universityCity,
    applicationDeadline, subjectName, description, postDate, isStipend, applicationFees, _id
  } = scholarship || {}
  //console.log(scholarship);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>
 const handleApplyScholarship = () => { 
  if(!user) return navigate('/login');
  setPaymentModalOpen(false)
  handlePaymentSuccess()
 }

  const  handlePaymentSuccess  = () => {
    // Simulate a payment success and redirect to form
    setPaymentModalOpen(false);
    setTimeout(() => {
      navigate(`/dashboard/apply-scholarship/${id}`, {
        state: {
          scholarshipId: id,
          universityName,
          scholarshipCategory,
          subjectName,
          subjectCategory,
        },
      });
    }, 1000); // Simulate a small delay
  };
  return (
    <Container>
      <Helmet>
        <title>SMS || Specific Scholarship Details info</title>
      </Helmet>

      <div className='mx-auto flex flex-col lg:flex-row justify-between w-full gap-12'>
        {/* Header */}
        <div className='flex flex-col gap-6 flex-1'>
          <div>
            <div className='w-full overflow-hidden rounded-xl '>
              <img
                className='object-cover w-full'
                src={universityImage}
                alt='header image'
              />
            </div>
          </div>
        </div>
        <div className='md:gap-10 flex-1'>
          {/* Scholarship Info */}
          <Heading
            title={universityName}
            subtitle={`Category: ${scholarshipCategory}`}
            center={true}
          />
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
            {`Subject Name: ${subjectName}`}
          </div>
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
            {`Description: ${description}`}
          </div>
          <hr className='my-6' />
          <div
            className='
          text-lg font-light text-neutral-500'
          >
            {`Post Date: ${postDate}`}
          </div>
          <hr className='my-6' />

          <div
            className='
                text-xl 
                
                flex 
                flex-row 
                items-center  
                gap-2
              '
          >
            <div ><span className='font-normal '>University Address:</span> {universityCity},{universityCountry}</div>

            {/* <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              referrerPolicy='no-referrer'
             
            /> */}
          </div>
          <hr className='my-6' />
          <div>
            <p
              className='
                gap-4 
                font-light
                text-neutral-500
              '
            >
              Application Last Date: {applicationDeadline}
            </p>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between items-center'>
            <p className='font-bold text-xl text-gray-500'>Application Fees: ${applicationFees}</p>
            <p className='font-bold text-xl text-gray-500 '>Stipend : {isStipend ? 'Available' : 'Not Available'}</p>
            <div>
              
              <button onClick={handleApplyScholarship} className='btn bg-slate-500 text-white'>Apply Scholarship</button>
            </div>
          </div>
          <hr className='my-6' />
 {/* Payment Modal */}
 <Elements stripe={stripePromise}>
 <PaymentModal 
        isOpen={isPaymentModalOpen} 
        closeModal={() => setPaymentModalOpen(false)} 
        applicationFees={applicationFees} 
        onPaymentSuccess={handlePaymentSuccess} 
      />
      </Elements>
        </div>
      </div>
      <ScholarshipReviews scholarshipId={id}></ScholarshipReviews>
    </Container>
    
  );
};

export default ScholarshipDetails;