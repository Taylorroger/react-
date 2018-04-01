/**
 * Created by zzl on 2017/6/1.
 */
import React from 'react';
class List extends React.Component{
    render(){
        return <li>{this.props.item.name}</li>
    }
}
class InfoContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var list=[];
        var str=this.props.info;
        for (var i=0,len=str.length;i<len;i++){
            list.push(<List key={i} item={str[i]}/>)
        }
        return (
            <ul className="classify">
                {list}
            </ul>
        )
    }
}
export default InfoContainer;
