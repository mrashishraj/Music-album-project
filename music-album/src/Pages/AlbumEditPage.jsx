import { ColorLensOutlined } from "@material-ui/icons"
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {editAlbum} from "../Redux/editAlbumRedux/eAlbmAction"


class AlbumEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            genre:"",
            year:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {album_title} = this.props.match.params
        const {albumList,handleSubmit} = this.props
        const album = albumList.filter(item=>item.album_title==album_title) 
        const {id} = album[0]
        console.log(album,id)
        const {title,genre,year} = this.state
        return(
            <>
            {album && album.map(item=>
            <div className="col mb-4">
            <div className="card">
                <h5>You are going to edit this album</h5>
                <div className="card-body">
                    <h5 className="card-title">Album Name :- {item.album_title}</h5>
                    <p className="card-text">Genre : - {item.genre}</p>
                    <p className="card-text">Album Year : - {item.year}</p>
                </div>
            </div>
            </div>
                
                )}

                <div>
                    <label htmlFor="">Album Name :- </label>
                    <input type="text" name="title" value={title} onChange={(e)=>this.handleChange(e)} /><br/><br/>
                    <label htmlFor="">Genre :- </label>
                    <input type="text" name="genre" value={genre} onChange={(e)=>this.handleChange(e)} /><br/><br/>
                    <label htmlFor="">Album Year :- </label>
                    <input type="text" name="year" value={year} onChange={(e)=>this.handleChange(e)} /><br/><br/>
                   <Link to="/"> <button onClick={()=>handleSubmit({title,genre,year,id})} >Submit</button></Link> 
                   <Link to="/"> <button>Cancle</button></Link> 
                </div>

            </>
        )
    }
}

const mapStateToProps = state =>({
    albumList:state.albumReducer.albumList

})

const mapDispatchToProps = dispatch =>({handleSubmit:(payload)=>dispatch(editAlbum(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(AlbumEdit)