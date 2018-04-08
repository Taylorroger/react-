
import {INCREASE_ITEM} from "../actions/const";
import {DECREASE_ITEM} from "../actions/const";
import {SET_NUMBER} from "../actions/const";
import {SUBMIT_ORDER} from "../actions/const";
function increase(state,action){
    var temp
    var flag=false
    var newState=state.concat()
    if(!newState.length){
        return [...newState,{name:action.name,number:action.number}]
    }else{
        for(var i=0,len=newState.length;i<len;i++){
            temp=newState[i]
            if(newState[i].name==action.name){
                flag=true
                newState.splice(i,1,{name:action.name,number:action.number+temp.number})
                return newState
            }
        }
        if(!flag){
            return [...newState,{name:action.name,number:action.number}]
        }
    }
}
//删减订单数量
function decrease(state,action){
    var temp
    var newState=state.concat()
    for(var i=0,len=newState.length;i<len;i++){
        temp=newState[i]
        if(temp.name==action.name){
            if(temp.number>1){
                newState.splice(i,1,{name:action.name,number:temp.number-action.number})
                return newState
            }else if(temp.number==1){
                newState.splice(i,1)
                return newState
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