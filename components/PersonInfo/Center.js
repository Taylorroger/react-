/**
 * Created by zzl on 2017/7/20.
 */
//个人中心页面
import React from 'react';
import './center.scss'

class DisplayBox extends React.Component{
    constructor(props){
        super(props)
        this.state={name:'',id:'personal'}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick() {
        var target = event.target.id
        var text =document.getElementById(target).textContent
        this.setState({name:text,id:target})

    }
    componentDisMount(){
        document.getElementById('personal').addEventListener('click',this.handleClick)
        document.getElementById('recentOrder').addEventListener('click',this.handleClick)
    }
    render(){
        let whichOne=(this.state.id == 'personal')?this.props.box1:this.props.Box2
        return(
            <article className='displayBoard'>
                <ul className="navBar">
                    <li id='personal' onClick={this.handleClick}><h3>个人中心</h3></li>
                <li><h3>我的订单</h3>
                        <ul>
                            <li id='recentOrder'>近三个月订单</li>
                            <li id='comments'>评价订单</li>
                            <li id='chargeBack'>退单记录</li>
                        </ul>
                    </li>
                <li><h3>我的资产</h3>
                        <ul>
                            <li id='packet'>我的红包</li>
                            <li id='remainder'>账户余额</li>
                            <li id='integral'>我的积分</li>
                        </ul>
                    </li>
                <li><h3>我的资料</h3>
                        <ul>
                            <li id='personalData'>个人资料</li>
                            <li id='address'>地址管理</li>
                            <li id='safe'>安全中心</li>
                            <li id='modifyPassword'>修改密码</li>
                        </ul>
                    </li>
                </ul>
                {whichOne}
                </article>
        )
    }
}
class PerCenter extends React.Component{
    render(){
        return(
                <section className="info">
                    < ul className='baseInfo'>
                        <li>
                            <ul className='title'>
                                <li><img src='../../image/info.png'/></li>
                                <li>用户名</li>
                                <li>账户安全</li>
                            </ul>
                        </li>
                        <li>我的红包<span>0</span>个</li>
                        <li>我的积分<span>0</span>分</li>
                        <li>账户余额<span>0.00</span>元</li>
                    </ul>
                <div className='orderInfo'>
                    <h3>最近订单</h3>
                    <p>还没有订单哟</p>
                </div>

                    <ul className='prviate'>
                        <li>美食足迹</li>
                        <li>我的收藏</li>
                    </ul>
                </section>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <section className='content'>
                <h4>{this.state.name}</h4>
                <p>{this.props.content}</p>
            </section>
        )
    }
}

class ShowBox extends React.Component{
    render(){
        return <DisplayBox box1={<PerCenter/>} box2={<Content/>}/>
    }
}

export default ShowBox



