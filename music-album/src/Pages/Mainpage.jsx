import React from "react"
import {albumData} from "../Redux/albumRedux/ActionCreator"
import {connect} from "react-redux"
import ListItem from "../Component/item"

class Mainpage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.getAlbum()
    }


    render(){
        const {albumList,isAuth,user} = this.props
        var userAlbum
        if(isAuth){
            const username = user.data[0].user_fullname
            userAlbum = albumList.filter(item=>item.singer_name==username)
        }
        console.log(userAlbum)

        return(
            <div className="container">
{/* --------------------------------PAGINATION------------------------------- */}
            {/* <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                    <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link">1</a></li>
                    <li class="page-item active">
                    <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" >3</a></li>
                    <li class="page-item">
                    <a class="page-link" >Next</a>
                    </li>
                </ul>
            </nav> */}
{/* -----------------------------CARD-------------------------------------------- */}

            
            <div className="row row-cols-md-3 py-5 ">
                {!isAuth?albumList && albumList.map(item=><ListItem key={item.album_title} list={item}/>):
                userAlbum && userAlbum.map(item=><ListItem key={item.album_title} list={item}/>)
                }                           
            </div>
            </div>
           
        )
    }
}   

const mapStateToProps = state =>({
    isLoading:state.albumReducer.isLoading,
    isError:state.albumReducer.isError,
    error:state.albumReducer.error,
    albumList:state.albumReducer.albumList,
    isAuth:state.loginReducer.isAuth,
    user:state.loginReducer.userDetails
})

const mapDispatchToProps = dispatch =>({getAlbum:(payload)=>dispatch(albumData(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(Mainpage)