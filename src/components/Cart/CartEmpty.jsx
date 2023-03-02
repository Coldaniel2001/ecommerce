import React from 'react'
import { useNavigate } from 'react-router-dom'
import cartEmpty from '../../images/iconsCart/cartEmpty.png'
import "./CartEmpty.css"
const CartEmpty = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/products')
    }

    return (
        <div className='flex__div--container'>
            <img className='cart-empty__img' src={cartEmpty} alt={cartEmpty} />
            <p className='message-empty__p'>Tu carrito esta vacío</p>
            <button className='return-shop__button' onClick={handleClick}>Volver a la tienda</button>
        </div>
    )
}

export default CartEmpty