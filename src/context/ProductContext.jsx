import React, { createContext, useEffect, useState } from 'react'
import electricSkates from '../db';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPriceTotal = localStorage.getItem('cartPriceTotal') || "";
    const [allElectric, setAllElectric] = useState(electricSkates);
    const [cart, setCart] = useState(cartList);
    const [cartTotal, setCartTotal] = useState(cartPriceTotal);

    useEffect(() => {
        const stringCartList = JSON.stringify(cart);
        const stringCartPriceTotal = JSON.stringify(cartTotal);

        localStorage.setItem("cart", stringCartList);
        localStorage.setItem("cartPriceTotal", stringCartPriceTotal);
    }, [cart, cartTotal]);

    return (
        <ProductContext.Provider value={{allElectric, setAllElectric, cart, setCart, cartTotal, setCartTotal}}>
            {children}
        </ProductContext.Provider>
    )
}
