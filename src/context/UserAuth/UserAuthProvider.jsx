import React, { useReducer, useState } from 'react'
import UserAuthContext from './UserAuthContext'
import authReducer from './authReducer'
import type from './type/type'


const init = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return {
        isLogged: !!user,
        user
    }

}
const UserAuthProvider = ({ children }) => {


    const [state, dispatch] = useReducer(authReducer, {}, init)

    const [dataLogin, setDataLogin] = useState({
        gmail: "",
        password: ""
    })

    const login = (users) => {
        const user = {
            id: users._id,
            gmail: users.gmail,
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({ type: type.login, payload: user })
    }

    const logout = (email) => {
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        dispatch({ type: type.logout })
    }

    const register = (users) => {
        const user = {
            id: users._id,
            gmail: users.gmail,
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({ type: type.register, payload: user })
    }

    return (
        <UserAuthContext.Provider value={{ ...state, dataLogin, setDataLogin, login: login, logout: logout, register:register }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthProvider