import { AuthContext } from "../auth/context/AuthContext";
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouter({ children }) {
    const { isLogged } = useContext(AuthContext)

    return isLogged ? children : <Navigate to={"/login"} />
}

export default PrivateRouter