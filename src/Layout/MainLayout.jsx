import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Banner from '../components/Home/Banner';
import { ThemeProvider } from '../components/theme-provider';
import SearchBar from '../components/Home/SearchBar';

const MainLayout = () => {
    const location = useLocation();
    return (
        <ThemeProvider>
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            {location.pathname === '/' && <Banner/>}
            {location.pathname === '/' && <SearchBar/>}
           

            <div className='flex-1 mx-auto max-w-screen-2xl px-4'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </ThemeProvider>
    );
};

export default MainLayout;