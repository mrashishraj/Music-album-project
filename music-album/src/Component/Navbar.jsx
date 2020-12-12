import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {isAuth} = this.props
        return(
            <>
                <div className="container p-2 border bg-primary">
                    <div className="text-white">Music album</div>
                    <div className="">
                        {!isAuth?
                        <Link to="/artist_login"> <button>Artist Login</button> </Link>:null}
                    </div>
                        
                </div>
            </>
        )
    }
}

const mapStateToProps = state =>({
    isAuth:state.loginReducer.isAuth
})

export default connect(mapStateToProps)(Navbar)