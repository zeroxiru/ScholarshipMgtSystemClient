import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { Helmet } from 'react-helmet-async';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ModeratorMScholarshipDataRow from '../../../components/Dashboard/TableRows/ModeratorMScholarshipDataRow';


const ManageScholarship = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    // const [selectedScholarship, setSelectedScholarship] = useState(null);
    // const queryClient = useQueryClient();

    // Fetch all scholarships
    const { data: scholarships = {},
        isLoading,
        refetch
    } = useQuery({
        queryKey: ["scholarships"],
        queryFn: async () => {
            const { data: {data =[] = {}} } = await axiosSecure(`/dashboard/moderator/scholarships/`);
            return data;
        },
    });
    console.log(scholarships);
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <>
            <Helmet>
                <title>Manage Scholarship By Moderator</title>
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
                                            Scholarship Category
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
                                            Application DeadLine
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
                                    {scholarships.map(scholarship => (<ModeratorMScholarshipDataRow
                                        key={scholarship._id}
                                        scholarshipData={scholarship}
                                        refetch={refetch}
                                    ></ModeratorMScholarshipDataRow>))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageScholarship;