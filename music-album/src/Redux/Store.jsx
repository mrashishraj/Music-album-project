import {createStore,applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';



const thunk = store => next => action => {
    typeof (action) == "function" ?
    action(store.dispatch):
        next(action)
}


export const Store = createStore(composeWithDevTools(applyMiddleware(thunk),) )