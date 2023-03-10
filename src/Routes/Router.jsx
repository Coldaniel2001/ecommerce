import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthProvider from '../auth/context/AuthProvider';
import Cart from '../components/Cart/Cart';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductProvider } from '../context/ProductContext';
import PrivateRouter from './PrivateRouter';


function RouterPaths() {
    return (
        <>
            <ProductProvider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/login*' element={<Navigate replace={true} to={("/login")}/>} />
                            <Route path='/*' element={
                                <PrivateRouter>
                                    <Routes>
                                        <Route path='/products' element={<ProductCard />} />
                                        <Route path='/' element={<Home />} />
                                        <Route path='/cart' element={<Cart />} />
                                    </Routes>
                                </PrivateRouter>
                                
                            } />
                    </Routes>
                </BrowserRouter>
                </AuthProvider>
            </ProductProvider>
        </>
    )
}

export default RouterPaths;