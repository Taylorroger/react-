import {log} from './log.js'
import {request_sellers_data,request_seller_data} from "./request";
import {handleItem} from "./handleOrder";
import {combineReducers} from 'redux'

export const rootReducer=combineReducers({
   log:log,
    order:handleItem
})

