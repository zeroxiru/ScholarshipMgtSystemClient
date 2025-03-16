import React from 'react';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/shared/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const Statistics = () => {
    const [role, isLoading] = useRole()
    if (isLoading) return <LoadingSpinner />
    if (role === 'User') return <Navigate to='/dashboard/my-orders' />
    if (role === 'Moderator') return <Navigate to='/dashboard/my-inventory' />
    return (
        <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {/* {role === 'admin' && <AdminStatistics />} */}
      </div>
    );
};

export default Statistics;