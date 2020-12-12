import {POST_ALBUM_DATA_REQUEST,
    ALBUM_DATA_REQUEST_SUCCESS,
    ALBUM_DATA_REQUEST_FAILURE } from "./ActionType"
import axios from "axios"

export const postAlbumDataRequest = payload => ({
    type:POST_ALBUM_DATA_REQUEST,
    payload
})

export const albumDataRequestSuccess = payload =>({
    type:ALBUM_DATA_REQUEST_SUCCESS,
    payload
})

export const albumDataRequestFailure = payload =>({
    type:ALBUM_DATA_REQUEST_FAILURE,
    payload
})

export const albumData = payload => dispatch =>{
    dispatch(postAlbumDataRequest())
    axios.get("http://localhost:5000/albums")
    .then(res=>dispatch(albumDataRequestSuccess(res.data)))
    // .then(res=>console.log(res))
    .catch(err=>console.log(err))
}



