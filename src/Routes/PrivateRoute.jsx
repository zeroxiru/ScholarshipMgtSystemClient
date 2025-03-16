import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner'
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) return <LoadingSpinner></LoadingSpinner>
    if (user) return children
    return <Navigate to='/login' state={{ from: location }} replace='true'></Navigate>
};

PrivateRoute.propTypes = { 
    children: PropTypes.element,
}

export default PrivateRoute;