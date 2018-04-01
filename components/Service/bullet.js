/**
 * Created by zzl on 2017/9/1.
 */
import React from 'react';
import {Router,Route,Link,IndexLink,hashHistory,IndexRoute} from 'react-router';
import ReactDOM from 'react-dom';
import './bullet.scss'
class Board extends React.Component{
    render(){
        return(
            <article>
                <nav>
                    <h4>常见问题</h4>
                <ul>
                    <li><Link to="/Not1">热门问题</Link></li>
                    <li><Link to="/Not2">支付问题</Link></li>
                    <li><Link to="/Not3">催单配送</Link></li>
                    <li><Link to="/Not4">余额问题</Link></li>
                    <li><Link to="/Not5">网站规则</Link></li>
                    <li><Link to="/Not6">饿了么会员</Link></li>
                </ul>
                </nav>
                {this.props.children}
            </article>
        )
    }
}



/* const RouteCoonfig=()=>(
    <Route path="/" component={Board}>
        <IndexRoute component={Not1}/>
        <Route path="Not1" component={Not1}/>
        <Route path="Not2" component={Not2}/>
        <Route path="Not3" component={Not3}/>
        <Route path="Not4" component={Not4}/>
        <Route path="Not5" component={Not5}/>
        <Route path="Not6" component={Not6}/>
    </Route>
)*/
export default Board

