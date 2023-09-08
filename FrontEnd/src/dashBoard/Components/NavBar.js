import React, { useState } from 'react';
import './navbar.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useMyContext } from '../../helpers/context';
function NavvBar(){
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
      
      
  const handleToggle = async () => {
    setExpanded(!expanded);
     //code to render nav bar content 0.5 second after nav bar is extended
    if (!expanded) {  // !expanded is used to hold the rendering of nav bar items while expanding the nav 
    // this if block holds the  setShowNavContent to turn true  by 0.5 second....
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(500); // Wait for 0.5 seconds
      
    }
    //when the nav bar is collapsed the nav content are removed immedietly....
    setShowNavContent(!showNavContent);
    
  };

  const selectMenu = (value) => {
    setMenuSelected(value);
    setMenu(true);
    setMyState(value);
    console.log(myState);
   
  };
  
  const sidebarItems = ['Dashboard', 'Insights', 'Business Search', 'Saved Search',
   'User Saved Searches' ,'Export List', 'Companies Notes List','Business Watch','Director Watch',
   'Chrome Extension'];

   return(
    <div className="sidebar">
    <header className="navbar-header" onClick={handleToggle}>
                  <p className='DATA'>DATA</p>
                  <p className='SAAS'>SAAS</p>
    </header>
    <ul>
      {sidebarItems.map((item, index) => (
      <li key={index}>
        <a href='#'  onClick={() => selectMenu(item)}>
          <FontAwesomeIcon icon={faStar} className="icon" />
            <span className={`list-item-content ${setMenu ? 'clicked' : ''}`}
                              onClick={() => selectMenu(item)}>
                            
                              {showNavContent ? item : null}
                              
                            </span>
                            </a>
                          
                        </li>
                      ))}
                    </ul>

              </div>
   )
}

export default NavvBar;