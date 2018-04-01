import React from "react";
class MenuRow extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let {para, ordering, addItem, decreaseItem} = this.props
        var arr = para.foods;
        var ListItem = [];
        arr.forEach(function (item, i) {
            ListItem.push(<MenuCell list={item} key={i} addtion={addItem} decrease={decreaseItem}/>)
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
        var btn = ''? <fieldset>
            <button >-</button>
            <input />
            <button >+</button>
        </fieldset> :<button onClick={()=>{addtion(list.name)}}>加入购物车</button>
        return (
            <li className="singleInfo">
                <img src={'https://fuss10.elemecdn.com/' + list.image_path.replace(/(\S\S\S)/, "$1/").replace(/(\S)/, "$1/").replace(/(jpeg|png)/, "$1.$1")}/>
                <p className="info">
                    <h5>{list.name}</h5>
                    <ul>
                        <li>{list.description}</li>
                        <li>月售{list.month_sales}单</li>
                        <li>￥{list.rating_count}</li>
                        <li>{btn}</li>
                    </ul>
                </p>
            </li>
        )
    }
}
export default MenuRow