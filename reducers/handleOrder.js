
import {INCREASE_ITEM} from "../actions/const";
import {DECREASE_ITEM} from "../actions/const";
import {SET_NUMBER} from "../actions/const";
import {SUBMIT_ORDER} from "../actions/const";
function increase(state,action){
    var temp={}
    var flag=false
    if(!state.length){
        return [...state,{name:action.name,number:action.number}]
    }else{
        for(var i=0,len=state.length;i<len;i++){
            temp=state[i]
            if(state[i].name==action.name){
                flag=true
                state.splice(i,1,{name:action.name,number:action.number+temp.number})
                return state
            }
        }
        if(!flag){
            return [...state,{name:action.name,number:action.number}]
        }
    }
}
//删减订单数量
function decrease(state,action){
    var temp={}
    for(var i=0,len=state.length;i<len;i++){
        temp=state[i]
        if(temp.name==action.name){
            if(temp.number>1){
                state.splice(i,1,{name:action.name,number:temp.number-action.number})
                return state
            }else{
                return state.splice(i,1)
            }

        }
    }
}
//添加订购菜单
export function handleItem(state=[],action){
    switch (action.type) {
        case INCREASE_ITEM:
            return increase(state,action);
            break;
        case DECREASE_ITEM:
            return decrease(state,action);
        break;
        default:
            return state
    }
}