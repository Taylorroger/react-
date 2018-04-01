import React from "react";
import {Redirect} from 'react-router'
import {loging} from "../../actions/actions";
import Home from "../Store/Home";

class PasswordLog extends React.Component {
    constructor(props) {
        super(props);
        this.state={username:'',password:''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.serialize = this.serialize.bind(this)
        this.getValue=this.getValue.bind(this)
    }
    handleSubmit(e){
        var str=this.serialize(e);
        alert(str);
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if((xhr.status>=200 && xhr.status<300)||xhr.status==304){

                    alert(xhr.responseText)
                }
                else{
                    alert(xhr.status)
                }
            }
        }
        xhr.open('post',"register.php",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(str);
    }
    serialize(e){
        var parts=[],
            field=null,
            i,len,j,optLen,option,optValue;
        for(i=0,len=e.target.parentNode.elements.length;i<len;i++){
            field=e.target.parentNode.elements[i];
            switch(field.type){
                case "select-one":
                    //case "select-multiple"：
                    if(field.name.length){
                        for(j=0,optlen=field.options.length;j<optLen;j++){
                            option=field.options[j];
                            if(option.selected){
                                optValue="";
                                if(option.hasAttribute){
                                    optValue=(option.hasAttribute("value")?option.value:option.text);
                                }
                                else{
                                    optValue=(option.attributes["value"].specified?option.value:option.text);
                                }
                                parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(optValue));
                            }
                        }
                    }
                    break;
                case undefined:
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "radio":
                case "checkbox":
                    if(!field.checked){
                        break;
                    }
                default:
                    if(field.name.length){
                        parts.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));
                    }
            }

        }
        return parts.join("&&");
    }
    getValue(){
        var username=document.getElementById('userName').value;
        var password=document.getElementById('passWord').value;
        if((username!=='') && (password!=='')){
            this.props.login(username)
            console.log(this.props.isLog)
        }
    }


    render() {
            return (
                <form>
                    <input type="text" id='userName' name="userName" placeholder="手机/邮箱/用户名" required=""/>
                    <input type="password" id='passWord' name="passWord" placeholder="密码" required=""/>
                    <input type="button" value="登录" className="logButton" onClick={this.getValue}/>
                </form>
            )
    }
}
export default PasswordLog