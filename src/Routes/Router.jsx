import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Active from '../components/Active/Active';
import Completed from '../components/Completed/Completed';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';

function Router() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/completed' element={<Completed />} />
                    <Route path='/active' element={<Active/>} />
                    <Route path='/*' element={<Navigate to={"/"}/>} />
                </Routes>
            </BrowserRouter>
        </>


    )
}

export default Router