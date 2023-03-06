import React, {useContext} from 'react'
import { ProductContext } from '../../context/ProductContext'
import CartEmpty from './CartEmpty'
import CartNotEmpty from './CartNotEmpty'

function Cart() {

  const {cart} = useContext(ProductContext);
  
  return (
    <>
      {cart.length>0?<CartNotEmpty />:<CartEmpty />}
    </>

  )
}

export default Cart
