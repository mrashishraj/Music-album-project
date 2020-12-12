import React from "react"
import{Route,Switch} from "react-router-dom"
import Navbar from "../Component/Navbar"
import Mainpage from "../Pages/Mainpage"
import SongsList from "../Pages/SongsListPage"
import Login from "../Pages/LoginPage"
import AlbumEdit from "../Pages/AlbumEditPage"

export default class PublicRoute extends React.Component{
    render(){
        return(
            <>
               <Route path="/" component={(props)=><Navbar {...props} />}/> 
               <Switch>
                    <Route path="/" exact component={(props)=>< Mainpage {...props}/>} />
                    <Route path="/album/:album_title" exact component={(props)=><SongsList {...props}/>}/>
                    <Route path="/artist_login" exact component={(props)=><Login {...props} />}/>
                    <Route path="/edit_album_details/:album_title" exact component={(props)=><AlbumEdit {...props} />}/>
               </Switch>
            </>
        )
    }
}