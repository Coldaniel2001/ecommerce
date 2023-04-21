import React, { useContext } from 'react'
import UserAuthContext from '../context/UserAuth/UserAuthContext'
import {Navigate} from 'react-router-dom' 

const RouterPrivate = ({ children }) => {
  const { isLogged } = useContext(UserAuthContext)
  
  return (
    <>
      {isLogged?children:<Navigate to="/login"/>}
    </>
  )
}

export default RouterPrivate