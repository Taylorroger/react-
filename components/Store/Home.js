/**
 * Created by zzl on 2017/6/13.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'redux'
import {createStore} from 'react-redux'

import InfoContainer from './Info.js';
import HomeList from './HomeList.js';
import ShoppingCar from './ShoppingCar'
import LoadMore from './LoadMore'
import Send from '../data/data.js'

import {request_sellers_data} from "../../reducers/request"
var info =[{name:'全部商家'},{name:'美食'},{name:'快餐便当'},{name:'特色菜系'},{name:'异国料理'},
    {name:'小吃夜宵'},{name:'甜品饮品'},{name:'果蔬生鲜'},{name:'鲜花蛋糕'},{name:'商店超市'},
    {name:'早餐'},{name:'正餐优选'},{name:'下午茶'},{name:'夜宵'}];

var list=[['用户帮助','服务中心','常见问题','在线客服'],['商务合作','我要开店','加盟指南','市场合作','开放平台'],
    ['关于我们','饿了么介绍','加入我们','联系我们']];


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {productList:[]};
        this.handleClick=this.handleClick.bind(this)
    }
    componentWillMount() {
        Send('hot_search_words',null,(data)=>{
            this.setState({
                productList:this.state.productList.concat(data)
            })
        })
    }
    handleClick(){
        Send('hot_search_words',null,(data)=>{
            this.setState({
                productList:this.state.productList.concat(data)
            })
        })
    }
   /*ajax(){
        xhr=new XMLHttpRequest();
       xhr.onreadystatechange=function(){
           if(xhr.readyState == 4){
               if((xhr.status >= 200 && xhr.status < 300 )|| xhr.status ==304 ){
                   alert(xhr.responseText);
               }else{
                   alert("Request was unsuccessful:"+ xhr.status);
               }
           }
       }
       xhr.open('get','my.text',true)
       xhr.send(null);
   }*/
   /*requestData(){
      var  xhr=new XMLHttpRequest()
       xhr.onreadystatechange=function(){
           if(xhr.readyState == 4){
               if((xhr.status >= 200 && xhr.status < 300 )|| xhr.status ==304 ){
                   alert(xhr.responseXML);
               }else{
                   alert("Request was unsuccessful:"+ xhr.status);
               }
           }
       }
       xhr.open('get','my.text',true)
       xhr.send(null);
   }*/
   /* componentDidMount(){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if((xhr.status >= 200 && xhr.status < 300 )|| xhr.status==304){
                    alert(xhr.responseXML);
                }else{
                    alert("Request was unsuccessful:"+ xhr.status);
                }
            }
        }
        xhr.open('get','data.json',true)
        xhr.send(null);
    }*/
    render(){
        return(
            <div>
                <InfoContainer info={info}/>
                <HomeList namelist={this.state.productList}/>
                <ShoppingCar/>
                <LoadMore handleEvent={this.handleClick}/>
            </div>
        )
    }
}
export default Home;
