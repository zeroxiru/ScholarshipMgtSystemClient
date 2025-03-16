import React from 'react';
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const ModeratorRoute = ({children}) => {
    const [role,  isLoading] =useRole()
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    if(role === 'Moderator') return children
    return <Navigate to='/dashboard' replace='true'></Navigate>
    
};

export default ModeratorRoute;