import React from 'react'
import cartShopping from '../../images/iconsCart/cartShopping.png';
import search from '../../images/search/search.png';
import logoWilson from '../../images/Logo/logoWilson.png';
import iconUser from '../../images/iconUser/iconUser.png'
import shop from '../../images/goShopping/shop.png'
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='navbar__div--container'>
            <nav>
                <Link to="/products">
                    <img className='navbar__img' src={shop} />
                </Link>
                <Link to="/">
                    <img className='logoWilson__img--logo' src={logoWilson} />
                </Link>
            </nav>

            <div className="navbar__div--search">
                <input className='navbar__input' />
                <img className='navbar__img' src={search} />
            </div>
            <img className='navbar__img' src={iconUser} />
            <nav>
                <img className='navbar__img' src={cartShopping} />
            </nav>
        </div>

    )
}

export default NavBar;