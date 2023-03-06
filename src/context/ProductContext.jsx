import React, { createContext, useEffect, useState } from 'react'
import electricSkates from '../db';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    const [allElectric, setAllElectric] = useState(electricSkates);
    const [cart, setCart] = useState(cartList);

    useEffect(() => {
        const stringCartList = JSON.stringify(cart);
        localStorage.setItem("cart", stringCartList);
    }, [cart]); 

    return (
        <ProductContext.Provider value={{allElectric, setAllElectric, cart, setCart}}>
            {children}
        </ProductContext.Provider>
    )
}
