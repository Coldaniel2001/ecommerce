import { type } from "./type/type";

const authReducer = (state, action) => {

    switch (action.type) {
        case type.login:
            return {
                ...state,
                isLogged:true,
                user: action.payload
            }
        case type.logout:
            return{
                ...state,
                isLogged:false,
                user:null
            }
        default: return state ;
    }
}

export default authReducer;