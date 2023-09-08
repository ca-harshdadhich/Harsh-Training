import React, { useState } from 'react';
 // Correct import path
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './profilesection.css';
import { useMyContext } from '../../helpers/context';


function Profile({ selectMenu }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { myState, updateState } = useMyContext();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  
         const  handleItemClick = (items) => {
                  selectMenu(items);
                  console.log(items);
         }

  return (
    <div className='Parent_profileBox'>
      <div className='profileBox'>
        <img src={process.env.PUBLIC_URL + '/images/profile_pic.png'} alt="profile pic" />
        <button className='profilename' onClick={toggleDropdown}>Profile Name</button>
      </div>
      {isDropdownOpen && ( <div className='dropdown'>
        <ul className="dropdown-list">
          <li className="profile-item" >
            <span className="profile-icon"><FontAwesomeIcon  className="icon" /></span> {/* Use the imported icon */}
           <button onClick={() => handleItemClick('Profile')}>MY Profile</button> 
          </li>
          <li onClick={() => handleItemClick('Change Password')}>Change Password</li>
          <li onClick={() => handleItemClick('Log Out')}>LOG OUT</li>
        </ul>
       
        </div>
      )}
    </div>
  );
}

export default Profile;
