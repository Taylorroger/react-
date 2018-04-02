//点击加载组件
import React from 'react';

class LoadMore extends  React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <p className="load" onClick={this.props.handleEvent}>
               点击加载更多商家...
            </p>
        )
    }
}
export default LoadMore;