import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { GrUserAdmin } from 'react-icons/gr';
import { BsFingerprint } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';
import BeAModerator from '../../../Modal/BeAModerator';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const StudentMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const closeModal = () => {
    setIsOpen(false)
  }

  const requestHandler = async () => {
    try {
      // send a request to server
      const { data } = await axiosSecure.patch(`/users/${user?.email}`)
      //console.log(data)
      toast.success('Successfully Applied to become a seller👍')
    }
    catch (err) {
      console.log(err.response.data)
      toast.error(err.response.data)
    }
    finally {
      closeModal()
    }
  }
  return (
    <>
      <MenuItem icon={BsFingerprint} label='My Applications' address='my-applications/:email' />


      <div>
        <MenuItem icon={MdRateReview} label='My Reviews' address='my-reviews' />
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className='flex  items-center px-2 py-2 mt-5 transition-colors duration-300 transform text-slate-500 hover:text-gray-700 cursor-pointer'
      >
        <GrUserAdmin className='w-5 h-5' />
        <span className='mx-4 font-medium'>Become Moderator</span>

      </button>

      <BeAModerator closeModal={closeModal} isOpen={isOpen} requestHandler={requestHandler} />
    </>
  );
};

export default StudentMenu;