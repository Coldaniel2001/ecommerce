import { type } from "./type/type";

const authReducer = (state, action) => {

    switch (action.type) {
        case type.login:
            return {
                ...state,
                isLogged:true,
                email: action.payload
            }
        case type.logout:
            return{
                ...state,
                isLogged:false
            }
        default: ;
    }
}

export default authReducer;