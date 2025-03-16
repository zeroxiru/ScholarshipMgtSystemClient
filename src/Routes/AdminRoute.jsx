import React from 'react';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const [role,  isLoading] =useRole()

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role === 'Admin') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
  
};

AdminRoute.propTypes = { 
    children: PropTypes.element,
}

export default AdminRoute;