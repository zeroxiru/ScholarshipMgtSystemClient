import React from 'react';
import MenuItem from './MenuItem';
import { MdAddCircle, MdAssignment, MdHomeWork, MdLibraryBooks, MdOutlineManageHistory, MdRateReview } from 'react-icons/md';
import { BsFillHouseAddFill } from 'react-icons/bs';

const ModeratorMenu = () => {
    return (
        <>
      <MenuItem
        icon={MdAddCircle}
        label='Add Scholarship'
        address='add-scholarship'
      />
          <MenuItem
        icon={MdRateReview}
        label='All Reviews'
        address='/dashboard/all-reviews'
      />
      <MenuItem
        icon={MdAssignment}
        label='All Applied Scholarships'
        address='/dashboard/all-applied-scholarships'
      />
      <MenuItem
        icon={MdLibraryBooks}
        label='Manage ScholarShip'
        address='/dashboard/manage-scholarships'
      />
    </>
    );
};

export default ModeratorMenu;