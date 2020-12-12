import Axios from "axios"
import {
    EDIT_ALBUM_REQUEST,
    EDIT_ALBUM_SUCCESS,
    EDIT_ALBUM_FAILURE
} from "./ActionType"

import {albumData} from "../albumRedux/ActionCreator"

export const editAlbumRequest = payload =>({
    type:EDIT_ALBUM_REQUEST,
    payload
})

export const editAlbumSuccess = payload =>({
    type:EDIT_ALBUM_SUCCESS,
    payload
})

export const editAlbumFailure = payload =>({
    type:EDIT_ALBUM_FAILURE,
    payload
})

export const editAlbum = payload => dispatch=>{
    const {title,genre,year,id} = payload
    dispatch(editAlbumRequest(payload))
    console.log(payload)
    Axios.patch(`http://localhost:5000/albums/${id}`,{
        album_title:title,
        genre:genre,
        year:year
    })
    .then(res=>dispatch(editAlbumSuccess(res)))
    .then(res=>dispatch(albumData(res)))
    .catch(err=>dispatch(editAlbumFailure(err)))
}