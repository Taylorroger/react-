import {
    DECREASE_ITEM, INCREASE_ITEM, LOG_IN, LOG_ING, LOG_OUT, LOG_SUCESS, REQUEST_SELLER_INFO, REQUEST_SELLERS,
    SUBMIT_ORDER
} from "./const";
//正在登录
export const loging=(userName)=>{
    return{
        type:LOG_ING,
        name:userName,
        isLogin:LOG_ING
    }
}
//登录成功
export const log_sucess=(userName)=>{
    return{
        type:LOG_SUCESS,
        name:userName,
        isLogin:LOG_IN
    }
}
//退出登录
export const logOut=()=>{
    return{
        type:LOG_OUT,
        isLogin:LOG_OUT
    }
}
//添加订单项
export const addItem=(text)=>{
    return{
        type:INCREASE_ITEM,
        name:text,
        number:1
    }
}
//减少订单
export const decreaseItem=(text)=>{
    return {
        type:DECREASE_ITEM,
        name:text,
        number:1
    }
}
//输入订单数量
export const inputNumber=(text,count)=>{
    return {
        type:SET_NUMBER,
        name:text,
        number:count
    }
}
//提交订单
export const submit_oreder=(items)=>{
    return{
        type:SUBMIT_ORDER,
        items
    }
}
//开始请求商家数据
export const request_sellers=(sellers)=>{
    return {
        type:REQUEST_SELLERS,
        sellers
    }
}
//请求商家详细信息
export const request_seller=(seller)=>{
    return{
       type:REQUEST_SELLER_INFO,
       seller
    }
}
//请求数据失败
export const request_fail=(RES)=> {
    return {
        type: REQUEST_FAIL,
        ero
    }
}
//请求数据成功
export const request_sucess=(RES)=>{
    return{
        type:REQUEST_SUCESS,
        res
    }
}
//
//请求商家数据异步action
export function fetchSellers(text) {
    return function (dispatch) {
        dispatch(request_sellers(text))
            return fetch('').then(response => response.json(), error => dispatch(request_fail(error)))
                .then(json => dispatch(request_sucess(json)))
    }
}

//请求商家详细信息异步action
export function fetchSeller(text) {
    return function(dispatch){
        dispatch(request_seller(text))
        return fetch().then(response=>response.json(),eroor=>dispatch(request_fail(error)))
            .then(json=>dispatch(request_sucess(json)))
    }
}
