import { AuthContext } from "../auth/context/AuthContext";
import React, { useContext } from 'react'

function PrivateRouter({children}) {
    const {isLogged} = useContext(AuthContext)
    
  return (
    <div>PrivateRouter</div>
  )
}

export default PrivateRouter