import Axios from "axios"
import {POST_LOGIN_REQUEST,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_FAILURE} from "./ActionType"

import {albumData} from "../albumRedux/ActionCreator"


    export const postLoginRequest = payload =>({
        type:POST_LOGIN_REQUEST,
        payload
    })

    export const postLoginSuccess = payload =>({
        type:POST_LOGIN_SUCCESS,
        payload
    })

    export const postLoginFailure = payload =>({
        type:POST_LOGIN_FAILURE,
        payload
    })

    export const postLogin = payload => dispatch =>{
        const {uName,pass} = payload
        console.log(uName,pass)
        dispatch(postLoginRequest(payload))
        Axios.get(`http://localhost:5000/users?username=${uName}&&password=${pass}`)
        // .then(res=>console.log(res))
        .then(res=>(res.data.length>0?dispatch(postLoginSuccess(res)):dispatch(postLoginFailure(res))))
        .then(()=>dispatch(albumData(payload)))
    }