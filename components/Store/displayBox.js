import React from 'react'
import './displayBox.scss'
class DisplayItem extends React.Component{
    render(){
    let {item,add,decrease}=this.props
        return(
            <tr><td>{item.name}</td><td><button onClick={()=>{add(item.name)}}>-</button></td><td><input type='text' value={item.number} onChange={()=>(item.number)}/></td><td><button onClick={()=>{decrease(item.name)}}>+</button></td></tr>
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
            <table className='list'>
                <thead><tr><td>购物车</td></tr></thead>
                <tbody>{arr}</tbody>
                <tfoot><tr><td>配送费￥</td><td>购物车是空的</td></tr></tfoot>
            </table>
        )
    }
}
export default DisplayBox