/**
 * Created by zzl on 2017/6/7.
 */
import React from 'react';
import Send from "../data/data";

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