import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


class ListItem extends React.Component{
    
    render(){
        const {singer_name,album_title,year,album_songs} = this.props.list
        const {isAuth} = this.props
        console.log(isAuth)

        return(
        <div className="col mb-4" key={singer_name}>
            <Link to={`/album/${album_title}`}>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{album_title}</h5>
                    <p className="card-text">{singer_name}</p>
                    <p className="card-text">{year}</p>
                    <p className="card-text">{album_songs.length}</p>

                </div>
                {isAuth?<Link to={`/edit_album_details/${album_title}`} >edit album</Link>:null}
            </div>
            </Link>
        </div>
        )
    }
}

const mapStateToProps = state =>({
    isAuth:state.loginReducer.isAuth
})

export default connect(mapStateToProps)(ListItem)
