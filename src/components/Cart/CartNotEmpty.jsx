import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import './cartNotEmpty.css'

const CartNotEmpty = () => {

  const { cart } = useContext(ProductContext);
  return (
    <div className='cart-products__div--container'>
      <h1 className='title_h1'>Carro de compra</h1>
      <div className='flex-info__div'>
        <p className='info__p'>Producto</p>
        <p className='info__p'>Precio</p>
        <p className='info__p'>Cantidad</p>
        <p className='info__p'>Total</p>
      </div>
      {cart.map((list) => (
        <div className='flex-products__div' key={list.id}>
          <div className='content-element-product__div'>
            <img src={list.img} alt="img-product"/>
            <div>
            <p>{list.title}</p>
            <button>Eliminar</button>
            </div>
          </div>
          <div className='content-element-product__div'>
            <p>{list.price} €</p>
          </div>
          <div className='content-element-product__div'>
            <p>cantidad</p>
          </div>
          <div className='content-element-product__div'>
            <p>Total</p>
          </div>
        </div>
      ))}
    </div>


  )
}

export default CartNotEmpty