import React, { useContext } from 'react'
import cartShopping from '../../images/iconsCart/cartShopping.png';
import logoWilson from '../../images/Logo/logoWilson.png';
import iconUser from '../../images/iconUser/iconUser.png'
import shop from '../../images/goShopping/shop.png'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';


const NavBar = () => {
    const {cart} = useContext(ProductContext);

    return (
        <div className='navbar__div--container'>
            <nav className='flex__nav'>
                <Link to="/products">
                    <img className='navbar__img' src={shop} alt={"shop"} />
                </Link>
                <Link to="/">
                    <img className='logoWilson__img--logo' src={logoWilson} alt={"logoWilson"} />
                </Link>
            </nav>
            <img className='navbar__img' src={iconUser} alt={"iconUser"} />
            <nav>
                <p><Link to="/cart"><img className='navbar__img' src={cartShopping} alt={"cart"} /></Link>({cart.length})</p>
            </nav>
        </div>

    )
}

export default NavBar;