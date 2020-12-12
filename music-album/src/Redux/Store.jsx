import {createStore,applyMiddleware,combineReducers} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import albumReducer from "./albumRedux/Reducer"
import loginReducer from "./loginRedux/LoginReducer"
const rootReducer = combineReducers({albumReducer:albumReducer,loginReducer:loginReducer})




const thunk = store => next => action => {
    typeof (action) == "function" ?
    action(store.dispatch):
        next(action)
}


export const Store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk),) )