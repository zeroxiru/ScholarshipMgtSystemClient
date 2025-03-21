import React from 'react';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics';
import { Helmet } from 'react-helmet-async';
import AddScholarship from '../Moderator/AddScholarship';

const Statistics = () => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner />
    if (role === 'User') return <Navigate to='/dashboard/my-applications/:email' />
    if (role === 'Moderator') return <Navigate to='/dashboard/all-applied-scholarships' />
    return (
        <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {role === 'Admin' && <AdminStatistics/>}
       
      </div>
    );
};

export default Statistics;