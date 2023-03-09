import React, {useContext} from 'react'
import { ProductContext } from '../../context/ProductContext'
import NavBar from '../NavBar/NavBar'
import CartEmpty from './CartEmpty'
import CartNotEmpty from './CartNotEmpty'

function Cart() {

  const {cart} = useContext(ProductContext);
  
  return (
    <>
      <NavBar/>
      {cart.length>0?<CartNotEmpty />:<CartEmpty />}
    </>

  )
}

export default Cart
