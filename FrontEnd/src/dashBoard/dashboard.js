import React, { useState } from 'react';
//import 'dashBoard/Components/navbar.css';
import { useMyContext } from 'helpers/context';
import NavvBar from 'dashBoard/Components/NavBar';
import NotSideBar from 'dashBoard/Components/NotNavBar';

function Navbar() {
const {expanded,setExpanded,} = useMyContext();
  



  return (
    <div className={`container ${expanded ? `expanded` : ''}`}>
      <NavvBar/>
      <NotSideBar/>
    </div>
  );
}

export default Navbar;
