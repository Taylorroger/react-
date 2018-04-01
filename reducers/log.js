
import {LOG_SUCESS} from "../actions/const";
import {LOG_OUT} from "../actions/const";

export function log(state={
    name:'',
    isLogin:false
},action){
    switch (action.type){
        case LOG_SUCESS:
            return Object.assign({},state,{
                name:action.name,
                isLogin:true
            })
        case LOG_OUT:
            return Object.assign({}.state,{
                name:action.name,
                isLogin:false
            })
        default:
            return state
    }

}