import React, { Fragment } from 'react';
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  
  } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ApplyScholarshipModal = ({closeModal, isOpen, scholarship}) => {
    const navigate = useNavigate()
  const {user} = useAuth()
  const {universityName, universityImage, scholarshipCategory, universityCountry, universityCity,
    applicationDeadline, subjectName, description, postDate, isStipend, applicationFees, _id
} = scholarship || {} 
    return (
        <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Review Info Before Purchase
                </DialogTitle>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Plant: {''}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Category: {'category'}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Customer: {user?.displayName}</p>
                </div>

                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Price: $ {''}</p>
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>Available Quantity: {''}</p>
                </div>
                {/*Quantity input field*/}
                <div className='space-x-1 text-sm mt-2'>
                  <label htmlFor='quantity' className=' text-gray-600'>
                    Quantity:
                  </label>
                  <input
                   
                    value={''}
                    onChange={(e)=> handleQuantity(parseInt(e.target.value))}
                    className=' p-2 text-gray-800 border border-slate-300 focus:outline-slate-500 rounded-md bg-white'
                    name='quantity'
                    id='quantity'
                    type='number'
                    placeholder='Available quantity'
                    required
                  />
                </div>
              
                {/*Address input field*/}
                <div className='space-x-2 text-sm mt-2'>
                  <label htmlFor='quantity' className=' text-gray-600'>
                    Address
                  </label>
                  <input
                    onChange={(e) => setPurchaseInfo(prev => { 
                      return { ...prev,
                      address: e.target.value}
                    }) 
                  }
                    className=' p-2 text-gray-800 border border-slate-300 focus:outline-slate-500 rounded-md bg-white'
                    name='address'
                    id='address'
                    type='text'
                    placeholder='Shipping Address'
                    required
                  />
                </div>
                <div className='mt-3'>
                  <button onClick={''}></button>
                </div>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default ApplyScholarshipModal;