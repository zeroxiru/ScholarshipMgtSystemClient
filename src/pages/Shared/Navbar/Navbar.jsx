import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import  Container  from '../Container'
 import avatarImg from '../../../assets/images/placeholder.jpg'
import logo from '../../../assets/images/logo-flat.png'
import {  AiOutlineMenu } from 'react-icons/ai'
import { ModeToggle } from '../../../components/mode-toggle';

const Navbar = () => {
  // const auth = useAuth(); // Get the auth object
  // const user = auth?.user || null; // Safely access the user object
  // const logOut = auth?.logOut || (() => {}); // Fallback to a no-op function if logOut is undefined
  const { user, logOut } = useAuth()
  
  const [isOpen, setIsOpen] = useState(false)
    return (
      <div className='sticky top-0 z-30 w-full bg-white  shadow-md '>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
         <div className='flex mr-8 lg:px-20 space-x-6 items-center'>
         <Link to='/'>
              <img src={logo}  alt='logo' width='70' height='70' />
            </Link>
             <div>
              
             <ModeToggle/> 
             </div>

         </div>
                  {/* Navigation Links */}
                  <div className='hidden md:flex flex-row items-center gap-4'>
              <Link to='/' className='text-gray-700 hover:text-gray-900'>
                Home
              </Link>
              <Link to='/all-scholarships' className='text-gray-700 hover:text-gray-900'>
                All Scholarships
              </Link>
              {/* {user && hasRole('user') && (
                <Link to='/user-dashboard' className='text-gray-700 hover:text-gray-900'>
                  User Dashboard
                </Link>
              )}
              {user && hasRole('admin') && (
                <Link to='/admin-dashboard' className='text-gray-700 hover:text-gray-900'>
                  Admin Dashboard
                </Link>
              )} */}
            </div>
            {/* Dropdown Menu */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <Link
                          to='/dashboard'   
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
    );
};

export default Navbar;