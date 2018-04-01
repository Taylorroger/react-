/**
 * Created by zzl on 2017/6/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router as Router,Route,browserHistory,IndexRoute} from 'react-router'
import Header from './const/Header.js'
import Footer from './const/Footer.js'
import Home from './Store/Home.js'
import Coopratation from './Coopretation/index.js'
import ShowBox from './PersonInfo/Center';
import Service from './Service/Service.js'
import LogContainer from '../container/logParent'
import PhoneLog from './Log/PhoneLog'
import PassLog from '../container/log'
import Bullet from './regular/serRegular.js'
import Detail from './Store/Store.js'
import Board from './Service/Bullet'
import '../common.scss';
import '../index.scss'
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from "../reducers/combineReducer";
import {handleItem} from "../reducers/handleOrder";
import {log} from "../reducers/log";

let store=createStore(rootReducer)
console.log(store.getState())
class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
const authRequired=(store)={
    if(!store.getState().log.isLogin){
        
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
                <IndexRoute  component={PhoneLog}/>
                <Route path='/PhoneLog' component={PhoneLog}/>
                <Route path='/PasswordLog' component={PassLog}/>
            </Route>
        </Route>
    </Router>
    </Provider>
    ,document.getElementById('root'));
/*const Myroute={
    path:'/',
    component:App,
    indexRoute:{component:Home},
    childRoutes:[
        {
        path:'Home',
        component:Home
    },
        {
            path:'Center',
            component:ShowBox
        },
        {
            path:'Cooperation',
            component:Coopratation
        },
        {
            path:'service',
            component:Service,
        },
        {
            path:'regular',
            component:Bullet
        },
        {
            path:'Log',
            component:Log,
            childRoutes:[
                {
                    path:'PhoneLog',
                    component:PhoneLog
                },
                {
                    path:'PasswordLog',
                    component:PasswordLog
                }
            ]
        },
        {
            path:'detail',
            component:Detail
        },
        {
            path:'bullet',
            component:Board,

        }
    ]
}
ReactDOM.render(<Router history={browserHistory} routes={Myroute}/>,document.getElementById('root'))*/