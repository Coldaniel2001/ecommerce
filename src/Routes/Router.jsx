import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductProvider } from '../context/ProductContext';


function RouterPaths() {
    return (
        <>
            <ProductProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path='/products' element={<ProductCard />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/*' element={<Navigate replace to="/" />} />
                    </Routes>
                </BrowserRouter>
            </ProductProvider>
        </>
    )
}

export default RouterPaths;