
import {REQUEST_SELLERS} from "../actions/const";
import {REQUEST_SELLER_INFO} from "../actions/const";
import {REQUEST_SUCESS} from "../actions/const";
import {REQUEST_FAIL} from "../actions/const";

export function request_sellers_data(state=[],action){
    switch (action.type){
        case REQUEST_SELLERS:
            return Object({},state)
        case REQUEST_SUCESS:
            return Object.assign({},state,{
                data:action.res
            })
        case REQUEST_FAIL:
            return Object.assign({},state,{
                sellers_data:action.ero
            })
        default:
            return state
    }
}

//请求商家具体信息
export function request_seller_data(state=[],action){
    switch (action.type){
        case REQUEST_SELLER_INFO:
            return state;
        case REQUEST_SUCESS:
            return Object.assign({},state,{
                seller_data:action.res
            })
        case REQUEST_FAIL:
            return Object.assign({},state,{
                seller_data:action.ero
            })
    }
}

