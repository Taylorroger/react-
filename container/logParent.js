import React from 'react'
import Log from '../components/logPart/log'
import {connect} from 'react-redux'
const mapStateToProps=(state)=>{
    return {
        login:state.log
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {}
}
const LogContainer=connect(mapStateToProps,mapDispatchToProps)(Log)
export default LogContainer