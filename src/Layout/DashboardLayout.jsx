import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            {/* Left Side: Sidebar Component */}
            <Sidebar></Sidebar>
            {/* Right Side: Dashboard Dynamic Content */}

            <div className='flex-1  md:ml-64'>
                <div className='p-5'>
              <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;