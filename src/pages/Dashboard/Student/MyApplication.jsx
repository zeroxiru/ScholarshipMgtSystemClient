import React from 'react';
import StudentApplicationDataRow from '../../../components/Dashboard/TableRows/StudentApplicationDataRow';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';

const MyApplication = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: applications = [],
        isLoading,
        refetch
      } = useQuery({
        queryKey: ['applications', user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure(`/dashboard/my-applications/${user?.email}`)
          return data
          
        }
      })
   
if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <>
      <Helmet>
        <title>My Applications</title>
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
                      University name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      University Address
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Application Feedback
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Subject Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Applied Degree
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Application Fees
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Service Charge
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Application Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
                    >
                      Add Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map(AppData => (<StudentApplicationDataRow 
                  key={AppData._id}
                  AppData= {AppData}
                  refetch={refetch}
                  ></StudentApplicationDataRow>))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default MyApplication;