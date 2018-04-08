//商家商品展示组件
import React from "react";
class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {data,ordering,addItem,decreaseItem} = this.props
        var list = []
        data.forEach(function (item, i) {
            list.push(<MenuRow para={item} key={'s'+i} add={addItem} dec={decreaseItem} data={ordering}/>)
        })
        return (
            <div className='showArear'>{list}</div>
        )
    }
}
class MenuRow extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let {para,data, add,dec} = this.props
        var arr = para.foods;
        var ListItem = [];
        arr.forEach(function (item, i){
            item.number=0
            for(var j=0,len=data.length;j<len;j++){
                if(item.name==data[j].name){
                    item.number=data[j].number
                }
            }
            ListItem.push(<MenuCell list={item} key={item.name.toString()} addtion={add} decrease={dec}/>)
        })
        return (
            <section className="content">
                <p>{this.props.para.name}
                    <small>{this.props.para.description}</small>
                </p>
                <ul>{ListItem}</ul>
            </section>
        )
    }
}
class MenuCell extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        let {list,addtion,decrease}=this.props
        console.log(list.number)
        var btn =list.number!==0?<fieldset>
            <button className='decBtn' onClick={()=>decrease(list.name)}>-</button>
            <input type='text' value={list.number}/>
            <button className='increBtn' onClick={()=>addtion(list.name)}>+</button>
        </fieldset> :<button className='addBtn' onClick={()=>{addtion(list.name)}}>加入购物车</button>
        return (
            <li className="singleInfo">
                <img src={'https://fuss10.elemecdn.com/' + list.image_path.replace(/(\S\S\S)/, "$1/").replace(/(\S)/, "$1/").replace(/(jpeg|png)/, "$1.$1")}/>
                <section className="info">
                    <h5>{list.name}</h5>
                    <ul>
                        <li>{list.description}</li>
                        <li>月售{list.month_sales}单</li>
                        <li>￥{list.rating_count}</li>
                        <li>{btn}</li>
                    </ul>
                </section>
            </li>
        )
    }
}
export default Menu