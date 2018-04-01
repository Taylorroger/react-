/**
 * Created by zzl on 2017/6/2.
 */
//
import  React from 'react';
import  {Link} from 'react-router'
import LoadMore from './LoadMore.js';

class HomeLi extends React.Component{
    constructor(props){
        super(props);
        this.state={display:'none',left:'',top:'',width:'',position: 'absolute',zIndex:'150'}
        this.handleLeave=this.handleLeave.bind(this);
        this.handleEnter=this.handleEnter.bind(this);
    }
    handleEnter(e) {
        e.preventDefault;
        var targ=e.target.id;
        var viewWidth=document.body.clientWidth;
        var offLeft=document.getElementById(targ).offsetLeft;
        var offtop=document.getElementById(targ).offsetTop;
        var tagWidth=document.getElementById(targ).offsetWidth;
        var leftTag='';
        if((viewWidth-(offLeft+tagWidth))>tagWidth){
            leftTag=(offLeft+tagWidth);
        }
        else{
            leftTag=(offLeft-tagWidth);
        }
        this.setState({display:'block',left:leftTag+'px',top:offtop+'px'});
    }
    handleLeave(e){
        this.setState({display:'none'});
    }
    componentDidMount(){
       document.getElementById(this.props.info.id).addEventListener('mouseenter',this.handleEnter);
       document.getElementById(this.props.info.id).addEventListener('mouseleave',this.handleLeave)
    }
    render(){
        return(
            <article>
                <Link to="detail">
            <section  id={this.props.info.id} className="container" onClick={this.handleClick}>
                <p className="images">
                    <img src={'https://fuss10.elemecdn.com/'+this.props.info.image_path.replace(/(\S\S\S)/,"$1/").replace(/(\S)/,"$1/").replace(/(jpeg|png)/,"$1.$1")} alt="图片" />
                    <h5 className="timeArr">{this.props.info.time}分钟</h5>
                </p>
                <p className="infomation" >
                    <h3>{this.props.info.name}</h3>
                    <ul className="eval">
                        <li>评价星级</li>
                        <li>月售{this.props.info.recent_order_num}单</li>
                        <li>配送费{this.props.info.piecewise_agent_fee&&this.props.info.piecewise_agent_fee.extra_fee}</li>
                    </ul>
                </p>
            </section>
                </Link>
                <section className="notation" style={this.state}>
                        <h5>{this.props.info.name}</h5>
                        <ul>
                            <li>配送费￥{this.props.info.piecewise_agent_fee&&this.props.info.piecewise_agent_fee.extra_fee}</li>
                            <li>平均{this.props.info.time}分钟送达</li>
                        </ul>
                        <p>{this.props.info.description}</p>
                </section>

            </article>
        )
    }

}
class HomeList extends React.Component{
    render(){
        var ListItem=[];
        this.props.namelist.forEach(function(item,i){
            ListItem.push(<HomeLi info={item} key={i.toString()} />)
        })
        return (
                <main>
                {ListItem}
                </main>
        )
    }
}
export default HomeList;