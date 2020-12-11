import React from "react"
import{Route} from "react-router-dom"
import Navbar from "../Component/Navbar"


export default class PublicRoute extends React.Component{
    render(){
        return(
            <>
               <Route path="/" component={(props)=><Navbar {...props} />}/> 
            </>
        )
    }
}