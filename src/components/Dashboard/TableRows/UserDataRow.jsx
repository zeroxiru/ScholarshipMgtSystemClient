import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import {toast} from 'react-hot-toast';
import PropTypes from 'prop-types';
import UpdateUserModal from '../../Modal/UpdateUserModal';

const UserDataRow = ({userData, refetch}) => {
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false)
    const {name,email, role, status} = userData || {} 
     // handle user role update
  const updateRole = async selectedRole => {
    if (role === selectedRole) return
    try {
      await axiosSecure.patch(`/user/role/${email}`, {
        role: selectedRole,
      })
      toast.success('Role updated successfully!')
      refetch()
    } catch (err) {
      toast.error(err?.response?.data)
      console.log(err)
    } finally {
      setIsOpen(false)
    }
  }
    return (
      
        <tr>
           <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{role}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {status ? (
            <p
              className={`${
                status === 'Requested' ? 'text-yellow-500' : 'text-green-500'
              } whitespace-no-wrap`}
            >
              {status}
            </p>
          ) : (
            <p className='text-red-500'>Unavailable</p>
          )}
        </td>
  
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <span
            onClick={() => setIsOpen(true)}
            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative'>Update Role</span>
          </span>
          {/* Modal */}
          <UpdateUserModal
            updateRole={updateRole}
            role={role}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </td>
      </tr>
    );
}; 

UserDataRow.propTypes = {
    userData: PropTypes.object,
    refetch: PropTypes.func,
  }
export default UserDataRow;