import {connect} from 'react-redux'
import {log_sucess} from "../actions/actions";
import PasswordLog from '../components/Log/login'

const mapStateToProps=state=>{
    return{
        isLog:state.log
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        login:(username)=>{
            dispatch(log_sucess(username))
        }
    }
}

const PassLog=connect(mapStateToProps,mapDispatchToProps)(PasswordLog)
export default PassLog