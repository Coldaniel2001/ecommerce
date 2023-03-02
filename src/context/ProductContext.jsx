import React, { createContext, useEffect, useState } from 'react'
import electricSkates from '../db';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const electricList = JSON.parse(localStorage.getItem('electricSkates'));
    const [allElectric, setAllElectric] = useState(electricList);

    useEffect(() => {
        const electricList = JSON.stringify(electricSkates);
        localStorage.setItem("electricSkates", electricList)
    }, [allElectric]);

    return (
        <ProductContext.Provider value={{allElectric, setAllElectric}}>
            {children}
        </ProductContext.Provider>
    )
}
