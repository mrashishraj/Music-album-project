import React from "react"
import {
    EDIT_ALBUM_REQUEST,
EDIT_ALBUM_SUCCESS,
EDIT_ALBUM_FAILURE
} from "./ActionType"

export const initState = {
    isLoading:false,
    albumList:[],
    isError:false,
    error:""
}

const albumReducer = (state = initState,{type,payload})=>{
    // console.log(type,payload)
    switch (type) {
        case EDIT_ALBUM_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case EDIT_ALBUM_SUCCESS:
            return{
                ...state,
                isLoading:false
            };
        case EDIT_ALBUM_FAILURE:
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

export default albumReducer