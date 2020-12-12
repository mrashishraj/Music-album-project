import React from "react"
import { connect } from "react-redux"


class SongsList extends React.Component{

    render(){
        const {album_title} = this.props.match.params
        const {albumList} = this.props
        const obj = albumList.find(item=> item.album_title==album_title)
        console.log(obj.album_songs)
        console.log(album_title,albumList)
        return(
            <div className="container mt-4">
                <div className="list-group">
                {obj.album_songs && obj.album_songs.map(item=> 
                <p className="list-group-item list-group-item-action" aria-current="true">
                    {item.songs_name}
                </p>
                )}                
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    albumList:state.albumReducer.albumList
})

export default  connect(mapStateToProps)(SongsList)