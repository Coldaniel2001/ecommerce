import React, {useContext} from 'react'

import UserAuthContext from '../../context/UserAuth/UserAuthContext';

import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import './NavBar.css';

const NavBar = () => {
	const { logout} = useContext(UserAuthContext)

  return (
    <section className='nav-bar__Container'>
      <div className='nav-bar__flex' >
        <div onClick={logout} className='logout__div'><FiLogOut /></div>
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