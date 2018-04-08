import React from 'react'
import {addItem,decreaseItem,inputNumber} from "../actions/actions";
import MenuRow from '../components/store/row'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    console.log(state)
    return {
        ordering:state.order
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addItem:(text)=>{
            dispatch(addItem(text))
        },
        decreaseItem:(text)=>{
            dispatch(decreaseItem(text))
        },
        inputNumber:(text)=>{
            dispatch(inputNumber(text))
        }
    }
}

const Test=connect(mapStateToProps,mapDispatchToProps)(MenuRow)
export default Test