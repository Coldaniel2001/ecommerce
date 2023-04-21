import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   
    const [allUsers, setAllUsers] = useState([])
    const [url, setUrl] = useState({
        urlAllUser:"http://localhost:4002/users",
        urlOneUser:"http://localhost:4002/users/",
    })


    useEffect(()=>{
        async function fetchData() {
            const response = await fetch(url.urlAllUser);
            const data = await response.json()
            setAllUsers(data.allUsers)
        }
        fetchData()
    },[url.urlAllUser])

    return (
        <UserContext.Provider value={{ allUsers, setAllUsers, url, setUrl }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
