import React from 'react'
import './NavBar.css';

import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {


  return (
    <section className='nav-bar__Container'>
      <div className='nav-bar__flex' >
        <div className='logout__div'><FiLogOut /></div>
        <div className='center-wish__div'>
          <h1>Wish List</h1>
        </div>
        <div >
          <CgProfile />
        </div>
      </div>
    </section>
  )
}

export default NavBar