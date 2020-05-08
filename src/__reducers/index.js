import { combineReducers } from 'redux';
import {authentication} from "./authentication";
import {users} from "./userReducer";
import {createUserReducer} from "./createUserReducer";
import {industryReducer} from "./industryReducers";
import specialUserReducers from "./specialUserReducers";
import {productReducers} from "./productReducers";

export default combineReducers({
    authentication, users,createUserReducer,industryReducer,specialUserReducers,productReducers
})