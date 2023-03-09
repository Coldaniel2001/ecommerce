import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import './cartNotEmpty.css'

const CartNotEmpty = () => {

  const { cart, setCart, cartTotal, setCartTotal } = useContext(ProductContext);

  const handleDelete = (productId, productPrice, productQuantity) => {
    const filterDelete = cart.filter((product) => {
      return product.id !== productId
    })
    setCart(filterDelete);
    setCartTotal(cartTotal-(productPrice*productQuantity));
  }

  const handleOneDelete = (productId, productPrice) => {
    const deleteAll = cart.find(products => {
      return products.id === productId
    })

     if(deleteAll.quantity>1){
      setCart(cart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ))
      setCartTotal(cartTotal-(productPrice));
    }else{
      setCart(cart.filter((product) => {
        return product.id !== productId
      }))
      setCartTotal(cartTotal-(productPrice));
    }
      
      

  }

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
            <img src={list.img} alt="img-product" />
            <div>
              <p>{list.title}</p>
              <button onClick={() => handleDelete(list.id, list.price, list.quantity)}>Eliminar Todo</button>
              <button onClick={() => handleOneDelete(list.id, list.price)}>Eliminar</button>
            </div>
          </div>
          <div className='content-element-product__div'>
            <p>{list.price} €</p>
          </div>
          <div className='content-element-product__div'>
            <p>{list.quantity}</p>
          </div>
          <div className='content-element-product__div'>
            <p>{list.price*list.quantity}</p>
          </div>
          
        </div>
        
      ))}
      <div className="content-element-product-result_div">
        <span className='price-total__span'>Precio total: {cartTotal}</span>
        <button className='buy__button'>comprar</button>
      </div>
    </div>


  )
}

export default CartNotEmpty