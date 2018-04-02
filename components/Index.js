/**
 * Created by zzl on 2017/6/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import Header from './const/Header.js'
import Footer from './const/Footer.js'
import Home from './Store/Home.js'
import Coopratation from './Coopretation/coopretation.js'
import ShowBox from './PersonInfo/Center';
import Service from './Service/Service.js'
import LogContainer from '../container/logParent'
import Register from './Log/register'
import Login from '../container/log'
import Bullet from './regular/serRegular.js'
import Detail from './Store/Store.js'
import Board from './Service/Bullet'
import '../index.scss'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from "../reducers/combineReducer";

let store=createStore(rootReducer)
console.log(store.getState())
class App extends React.Component{
    render(){
        return (
            <div className='container'>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="Home" component={Home}/>
            <Route path="Center" component={ShowBox}/>
            <Route path="Cooperation" component={Coopratation}/>
            <Route path="service" component={Service}/>
            <Route path="regular" component={Bullet}/>
            <Route path="detail" component={Detail}/>
            <Route path="bullet" component={Board}/>
            <Route path="Log" component={LogContainer}>
                <IndexRoute  component={Register}/>
                <Route path='/PhoneLog' component={Register}/>
                <Route path='/PasswordLog' component={Login}/>
            </Route>
        </Route>
    </Router>
    </Provider>
    ,document.getElementById('root'));
