/**
 * Created by zzl on 2017/8/10.
 */
import React from 'react';
import Redirect from 'react-router'
import Home from '../Store/Home'
import ReactDOM from 'react-dom'
import "./log.scss"
import {Link,IndexLink} from 'react-router';

class Log extends React.Component{
    render(){
        let {login}=this.props
        if(login.isLogin){
            return <Redirect to='Home'/>
        }else{
            return(
                <section className="log">
                    <h3>饿了么</h3>
                    <ul>
                        <li><IndexLink to="/PhoneLog" activeStyle={{color:"#2395FF",borderBottom:"1px solid #2395FF"}}>注册</IndexLink></li>
                        <li><Link to="/PasswordLog" activeStyle={{color:"#2395FF",borderBottom:"1px solid #2395FF"}}>登录</Link></li>
                    </ul>
                    {this.props.children}
                </section>
            )
        }

    }
}
export default Log


