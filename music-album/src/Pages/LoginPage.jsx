import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import {postLogin} from "../Redux/loginRedux/LoginActionCreator"


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uName:"",
            pass:""
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        // this.props.submitLogin()
    }

    
    render(){
        const {uName,pass} = this.state
        const {submitLogin,isAuth} = this.props

        if(isAuth){
            return( <Redirect to="/"/>)
        }
        return(
            <>
            {/* <form action="" className="mt-5" onSubmit={(e)=>this.handleSubmit(e)}> */}
                <label htmlFor="">User Name :- </label>
            <input type="text" name="uName" value={uName} onChange={(e)=>this.handleChange(e)}/><br/><br/>
            <label htmlFor="">Password :- </label>
            <input type="text" name="pass" value={pass} onChange={(e)=>this.handleChange(e)}/><br/><br/>
            {/* <input type="submit" value="Login"/> */}
            <button onClick={()=>submitLogin({uName,pass})}>Login</button>
            {/* </form> */}
            </>
        )
    }
}

const mapStateToProps = state=> ({
    isAuth:state.loginReducer.isAuth
})

const mapDispatchToProps = dispatch =>({submitLogin:(payload)=>dispatch(postLogin(payload))}) 

export default connect(mapStateToProps,mapDispatchToProps)(Login)