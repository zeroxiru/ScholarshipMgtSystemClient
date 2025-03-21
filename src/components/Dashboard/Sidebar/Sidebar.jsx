import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import MenuItem from './Menu/MenuItem';
import StudentMenu from './Menu/StudentMenu';
import ModeratorMenu from './Menu/ModeratorMenu';
import AdminMenu from './Menu/AdminMenu';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-flat.png'
import { MdPerson } from 'react-icons/md';
import useRole from '../../../hooks/useRole';

const Sidebar = () => {
    const { logOut } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isloading] = useRole()
  console.log(role);
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
        <>
        {/* Small Screen Navbar */}
        <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
          <div>
            <div className='block cursor-pointer p-4 font-bold'>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='https://i.ibb.co.com/LYqT2wR/logo-flat.png'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>
  
          <button
            onClick={handleToggle}
            className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
          >
            <AiOutlineBars className='h-5 w-5' />
          </button>
        </div>
  
        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto'>
                <Link to='/'>
                  <img
                    // className='hidden md:block'
                    src={logo}
                    alt='logo'
                    width='100'
                    height='100'
                  />
                </Link>
              </div>
            </div>
  
            {/* Nav Items */}
            <div className='flex flex-col justify-between flex-1 mt-6'>
              <nav>
                {/*  Menu Items */}
                {role === 'User' && <StudentMenu />}
                 {(role === 'Moderator')&&<ModeratorMenu />}
               
                {(role === 'Admin')&&<AdminMenu />} 

              
              </nav>
            </div>
          </div>
  
          <div>
            <hr />
  
            <MenuItem
              icon={MdPerson}
              label='Profile'
              address='/dashboard/profile'
            />
            <button
              onClick={logOut}
              className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />
  
              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </>
    );
};

export default Sidebar;