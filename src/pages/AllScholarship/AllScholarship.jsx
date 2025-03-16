import React, { useContext, useState } from 'react';
import Container from '../Shared/Container';
import Card from '../../components/Home/Card';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";

const AllScholarship = () => {
    const { user } = useContext(AuthContext);
    const [scholarshipType, setScholarshipType] = useState('');
    const [search, setSearch] = useState('');
    const [queryParams, setQueryParams] = useState({
        scholarshipType: "",
        search: "",
    })

    // Construct the URL based on scholarshipType and search, defaulting to all scholarships if both are empty
    const url =  `${import.meta.env.VITE_API_URL}/scholarships?` +
            (queryParams.scholarshipType ? `scholarshipType=${scholarshipType}&` : '') +
            (queryParams.search ? `search=${search}` : '');
            

    // Use useQuery with dynamic queryKey
    const { data: scholarships =[], isLoading } = useQuery({
        queryKey: ['scholarships', queryParams], // Include search and scholarshipType in query key
        queryFn: async () => {
            const { data: { data = [] } = {} } = await axios(url);
            return data;
        },
        enabled: !!user // Ensure the query only runs if the user is authenticated
    });
    const handleSearch= () => { 
        setQueryParams({
            ...queryParams,
            search: search.trim(),
        })
    }

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="text-center py-10">
            <h2 className="text-blue-900 font-bold text-4xl mb-6">All Scholarship Section</h2>
            <div className='w-11/12 mx-auto bg-base-200'>
                <div className="flex justify-center px-4">
                    <div className="flex items-center gap-3">
                        <button
                        type='button'
                            className="text-xl cursor-pointer"
                            onClick={handleSearch} // Trigger search on icon click
                        >
                            <BiSearch />
                        </button>
                        <div className="w-full">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} // Update search value
                                type="text"
                                className="input w-auto max-w-xl input-bordered"
                                placeholder="Search Scholarship by Name, University, Degree"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6 mt-5">
                <select
                    value={scholarshipType}
                    onChange={(e) => {
                        setScholarshipType(e.target.value);
                        setQueryParams({
                          ...queryParams,
                          scholarshipType: e.target.value,
                        });
                      }} // Update scholarshipType on selection
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="">All Scholarship Types</option>
                    <option value="Full fund">Full Fund</option>
                    <option value="Partial">Partial</option>
                    <option value="Self-fund">Self Fund</option>
                </select>
            </div>
            <Container>
                {scholarships && scholarships.length > 0 ? (
                    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {scholarships.map((scholarship) => (
                            <Card key={scholarship._id} scholarship={scholarship} />
                        ))}
                    </div>
                ) : (
                    <p>No data Available in the Database</p>
                )}
            </Container>
            <Link to="/all-scholarships">
                <button className="btn bg-gray-500 mt-5 text-white">See all Scholarships</button>
            </Link>
        </div>
    );
};

export default AllScholarship;
