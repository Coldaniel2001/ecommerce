import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Active from '../components/Active/Active';
import Completed from '../components/Completed/Completed';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import RouterPrivate from './RouterPrivate';

function Router() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RouterPrivate>
                        <Home/>
                    </RouterPrivate>} />
                    <Route path='/active' element={<RouterPrivate>
                        <Active/>
                    </RouterPrivate>} />
                    <Route path='/completed' element={<RouterPrivate>
                        <Completed/>
                    </RouterPrivate>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/*' element={<Navigate to="/login"/>} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>


    )
}

export default Router