import React, { useState } from 'react';
import './navbar.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './profilesection';
import Bottomstripe from './bottomstripe';
import { useMyContext } from '../../helpers/context';


import Dashboard from 'dashBoard/Components/BoxComponent/Dashboard';
import Insights from 'dashBoard/Components/BoxComponent/Insights';
import BusinessSearch from 'dashBoard/Components/BoxComponent/BusinessSearch';
import SavedSearch from 'dashBoard/Components/BoxComponent/SavedSearch';
import UserSavedSearches from 'dashBoard/Components/BoxComponent/UserSavedSearches';
import ExportList from 'dashBoard/Components/BoxComponent/ExportList';
import CompaniesNotesList from 'dashBoard/Components/BoxComponent/CompaniesNotesList';
import BusinessWatch from 'dashBoard/Components/BoxComponent/BusinessWatch';
import DirectorWatch from 'dashBoard/Components/BoxComponent/DirectorWatch';
import ChromeExtension from 'dashBoard/Components/BoxComponent/ChromeExtension';


//import NavvBar from './NavBar';
function NotSideBar(){
    const {
        expanded,
        setExpanded,
        showNavContent,
        setShowNavContent,
        menu,
        setMenu,
        menuSelected,
        setMenuSelected,
        myState,
        setMyState,
      } = useMyContext();

      const selectMenu = (value) => {
        setMenuSelected(value);
        setMenu(true);
        setMyState(value);
        console.log(myState);
       
      };

      const renderComponent = () => {
        switch (myState) {
          case 'Dashboard':
            return <Dashboard />;
          case 'Insights':
            return <Insights />;
          case 'Business Search':
            return <BusinessSearch />;
          case 'Saved Search':
            return <SavedSearch />;
          case 'User Saved Searches':
            return <UserSavedSearches />;
          case 'Export List':
            return <ExportList />;
          case 'Companies Notes List':
            return <CompaniesNotesList />;
          case 'Business Watch':
            return <BusinessWatch />;
          case 'Director Watch':
            return <DirectorWatch />;
          case 'Chrome Extension':
            return <ChromeExtension />;
          default:
            return <Dashboard />;
        }
      };
      
    

      return(
        <div className='not-sidebar'>
                            <div className='stripe'>
                              <p>Home.</p>
                              <p>Dashboard</p>
                              <p>{menu ? menuSelected : null}</p>
                              
                              <Profile selectMenu={selectMenu} />
                            </div>
                          <Bottomstripe/>
                          
                          {renderComponent()}
                          </div>
    
      )
}
export default NotSideBar;