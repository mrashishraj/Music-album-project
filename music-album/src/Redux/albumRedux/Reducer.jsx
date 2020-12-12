import React from "react"
import {POST_ALBUM_DATA_REQUEST,
    ALBUM_DATA_REQUEST_SUCCESS,
    ALBUM_DATA_REQUEST_FAILURE } from "./ActionType"

export const initState = {
    isLoading:false,
    albumList:[],
    isError:false,
    error:""
}

const albumReducer = (state = initState,{type,payload})=>{
    // console.log(type,payload)
    switch (type) {
        case POST_ALBUM_DATA_REQUEST:
            return{
                ...state,
                isLoading:true
            };
        case ALBUM_DATA_REQUEST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                albumList:payload
            };
        case ALBUM_DATA_REQUEST_FAILURE:
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