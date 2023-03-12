import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const cartList = JSON.parse(localStorage.getItem('cart')) || [];
    const cartPriceTotal = parseInt(localStorage.getItem('cartPriceTotal')) || 0;
    const [allElectric, setAllElectric] = useState([]);
    const [cart, setCart] = useState(cartList);
    const [cartTotal, setCartTotal] = useState(cartPriceTotal);

    const productsUrl = 'http://localhost:3000/products';

    useEffect(() => {
        const stringCartList = JSON.stringify(cart);
        const stringCartPriceTotal = JSON.stringify(cartTotal);

        localStorage.setItem("cart", stringCartList);
        localStorage.setItem("cartPriceTotal", stringCartPriceTotal);
    }, [cart, cartTotal]);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch(productsUrl);
                const data = await response.json();
                
                setAllElectric(data);
            } catch (error ){
                console.log(error)
            }
            
        }
        fetchData();
    },[productsUrl, allElectric])

    

    

    return (
        <ProductContext.Provider value={{allElectric, setAllElectric, cart, setCart, cartTotal, setCartTotal}}>
            {children}
        </ProductContext.Provider>
    )
}
