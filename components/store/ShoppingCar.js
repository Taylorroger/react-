import React from 'react'
import './ShoppingCar.scss'
class ShoppingCar extends React.Component{
    constructor(props) {
        super(props)
        this.state={id:'',closed:true,name:''}
        this.handleClick = this.handleClick.bind(this)
        }
    //处理单击
    handleClick(e){
        var tag=e.target.id;
        var text=document.getElementById(tag).innerHTML;
        console.log(text)
        this.setState({id:tag,name:text,closed:!this.state.closed})
    }
    //创建XHR
    createXHR(){
        if(typeof XMLHttpRequest != 'undefined'){
            return new XMLHttpRequest();
        }
        else if(typeof ActiveXObject != 'undefined'){
            if(typeof arguments.callee.activeXString != 'string'){
                var versions=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML.XMLHttp'],i,len;
                for(i=0,len=versions.length;i<len;i++){
                    try{
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString =versions[i];
                        break;
                    }catch (e){
                    }
                }

            }
            return new ActiveXObject(arguments.callee.activeXString)
        }else{
            throw new Error("No XHR object available.")
        }
    }
    //发起数据请求
    ajax(){
        var xhr=this.createXHR();
        xhr.onreadystatechange=function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304) {
                    return xhr.responseText
                }else{
                    alert("Request was fail"+xhr.status)
                }
            }
        }
        xhr.open('get','example.txt',true);
        xhr.send(null);
    }

    render(){
            var selectStyle=this.state.closed?{right:-16+'em'}:{right:0+'em'}
        return (
            <div className='shopping_Car' style={selectStyle}>
             <div className='navBar'>
                <ul>
                    <li id='order' onClick={this.handleClick}>我的订单</li>
                    <li id='shopping_car' onClick={this.handleClick}>购物车</li>
                    <li id='info' onClick={this.handleClick}>我的信息</li>
                    <li>App下载</li>
                </ul>
            </div>
                <div className='content'>
                <h6>{this.state.name}</h6>
                <table>wu</table>
            </div>
        </div>)
    }
}
export default ShoppingCar