import React from 'react'
import {addItem,decreaseItem,inputNumber} from "../actions/actions";
import DisplayBox from '../components/Store/displayBox'
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

const ShowBox=connect(mapStateToProps,mapDispatchToProps)(DisplayBox)
export default ShowBox