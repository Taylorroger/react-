/**
 * Created by zzl on 2017/6/5.
 */
import React from 'react';
import './store.scss'
import '../../common.css'
import Send from "../data/data";
import Test from '../../container/handleOrder'
import ShowBox from '../../container/shoppingCar'
import MenuRow from  './row'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {handleItem} from "../../reducers/handleOrder";
import {DECREASE_ITEM, INCREASE_ITEM} from "../../actions/const";
import MenuCell from "./test";
//顶部商家基本信息展示
class MainInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var str="90c948c1f6578c4bb879e7ebf718de63jpeg"
        return (
            <section className="fundInfo">
                <img src={'https://fuss10.elemecdn.com/'+str.replace(/(\S\S\S)/,"$1/").replace(/(\S)/,"$1/").replace(/(jpeg|png)/,"$1.$1")}/>
                <ul className="right">
                    <li><small>起送价</small><br/>25元</li>
                    <li><small>配送费</small><br/>5元</li>
                    <li><small>平均送达时间</small><br/>20分钟</li>
                </ul>
            </section>
        )
    }
}
//查找导航
class StoreInfo  extends React.Component{
    render(){
        return(
        <section className="findBar">
            <ul className="left">
                <li>所有商品</li>
                <li>评价</li>
                <li>商家资质</li>
            </ul>
            <ul className="right">
                <li>默认排序</li>
                <li>评分</li>
                <li>销量</li>
                <li>价格</li>
                <li><input type="search" defaultValue='搜索商家，美食'/></li>
            </ul>

        </section>
        )
    }
}
//菜品大类分类信息
class MenuLi extends React.Component{
    render(){
        return (<li>{this.props.list}</li>)
    }
}
//
class MenuNav extends React.Component{
    render(){
        var listItem=[];
            this.props.paras.forEach(function (item) {
                listItem.push(<MenuLi list={item} key={item.toString()}/>)
            });
            return(
                    <ul className="menu">{listItem}</ul>
            )
    }
}
//全菜单渲染


//商家公告板公告板
class Bullet extends React.Component{
    render(){
        return(
            <section className='notation'>
                <h4>商家公告</h4>
                <p>{this.props.description}</p>
                <p>配送说明：<br/>配送费8￥</p>
                <p>举报商家</p>
            </section>
        )
    }
}
//商品选购页面的购物车
class ShoppingCar extends React.Component{
    render(){
        return(
            <section className="shoppingCar">
                <ShowBox/>
            </section>
        )
    }
}
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={catalog:[],data:[]}
    }
    componentDidMount(){
        Send('menu',null,(req)=>{
            var nameArr=[];
            for(var i=0,len=req.length;i<len;i++){
                nameArr.push(req[i].name)
            }
            this.setState({catalog:this.state.catalog.concat(nameArr),data:this.state.data.concat(req)})
        })
    }
    render(){
        return(
            <div>
                <MainInfo/>
                <StoreInfo/>
            <div className='detail'>
                <MenuNav paras={this.state.catalog}/>
                <Test data={this.state.data}/>
            </div>
                <aside>
                    <Bullet/>
                    <ShoppingCar/>
                </aside>
            </div>
        )
    }
}
export  default Detail
