import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./Auth/Reducer";
import { UserReducer } from "./User/Reducer";
import { AdminReducer } from "./Admin/Reducer";




const rootReducers = combineReducers({
    auth : AuthReducer,
    user : UserReducer,
    admin : AdminReducer,
})



export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))