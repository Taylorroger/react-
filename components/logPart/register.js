import React from "react";
//注册页面
class Register extends React.Component{
    render(){
        return(
            <form>
                <input type="text" maxLength="20" placeholder="手机号/邮箱/" required=""/>
                <input type="password" placeholder="密码" maxLength="20" required=""/>
                <p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意<a>《用户服务协议》</a></p>
                <input type="button" value="登录" className="logButton"/>
            </form>
        )
    }
}
export default Register