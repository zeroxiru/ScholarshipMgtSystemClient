import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';

const AdminMenu = () => {
    return (
        <div>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
            />
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
        </div>
    );
};

export default AdminMenu;