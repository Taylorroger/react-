/**
 * Created by zzl on 2017/6/1.
 */
import React from 'react';
import {Link,IndexLink} from 'react-router';
import './header.scss'
//头部导航栏
class Header extends React.Component{
    render(){
        return(
        <header>
            <div className='nav'>
                <ul className="left">
                    <li><Link to="Home">首页</Link></li>
                    <li><Link to="Center">我的订单</Link></li>
                    <li><Link to="Cooperation">合作加盟</Link></li>
                </ul>
                <ul className="right">
                    <li><Link to="service">服务中心</Link></li>
                    <li><Link to="regular">规则中心</Link></li>
                    <li>手机应用</li>
                    <li><Link to="Log">登录/注册</Link></li>
                </ul>
            </div>
        </header>
        )
    }
}
export default Header
