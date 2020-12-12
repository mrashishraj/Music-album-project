import {POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE} from "./ActionType"

export const initState = {
    isLoading:false,
    userDetails:[],
    isError:false,
    error:"",
    isAuth:false
}

const loginReducer = (state = initState,{type,payload})=>{
    console.log(type,payload)
    switch (type) {
        case POST_LOGIN_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case POST_LOGIN_SUCCESS:
            console.log(payload)
            return{
                ...state,
                isLoading:false,
                isAuth:true,
                userDetails:payload
            };
        case POST_LOGIN_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
                error:payload.message
            }           
    
        default:
            return state;
    }
}

export default loginReducer