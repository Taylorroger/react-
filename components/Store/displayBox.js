//购物车订单渲染组件
import React from 'react'
import './displayBox.scss'
class DisplayItem extends React.Component{
    render(){
    let {item,add,decrease}=this.props
        return(
            <li><span>{item.name}</span><button onClick={()=>{add(item.name)}}>-</button><input type='text' size='2em' value={item.number} onChange={()=>(item.number)}/><button onClick={()=>{decrease(item.name)}}>+</button></li>
        )
    }
}

class DisplayBox extends React.Component{
    render(){
        let {ordering,addItem,decreaseItem}=this.props
        var arr=[];
        ordering.map(function (list,i) {
            arr.push(<DisplayItem item={list} key={i} add={addItem} decrease={decreaseItem}/>)
        })
        return(
            <div className='list'>
                <p>购物车</p>
                <tul>{arr}</tul>
                <p><span>配送费￥</span><span>购物车是空的</span></p>
            </div>
        )
    }
}
export default DisplayBox