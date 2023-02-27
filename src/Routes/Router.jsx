import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { ProductCard } from '../components/ProductCard/ProductCard';


function RouterPaths() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/products' element={<ProductCard/>}/>
                    <Route path='/' element={<NavBar/>}/>
                    <Route path='/*' element={<Navigate replace to="/" />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterPaths;