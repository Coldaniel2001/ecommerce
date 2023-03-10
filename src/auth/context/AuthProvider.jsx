import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import authReducer from "./authReducer";
import { type } from "./type/type";

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    return{
        isLogged:!!user,
        user
    }
}

const AuthProvider = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer, {}, init)

    const login = (email,admin=false) => {
        const user = {
            id:1,
            email,
            admin
        }
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({type: type.login, payload: user})
    }

    const logout = () => {
        localStorage.removeItem("user");
        dispatch({type: type.logout})
    }

    return <AuthContext.Provider value={{...state, login: login, logout:logout}}>{children}</AuthContext.Provider>

}



export default AuthProvider;
