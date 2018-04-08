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
            <div className="part">
                <Link to="detail">
            <div  id={this.props.info.id} className="containerBox" onClick={this.handleClick}>
                <figure className="images">
                    <img src={'https://fuss10.elemecdn.com/'+this.props.info.image_path.replace(/(\S\S\S)/,"$1/").replace(/(\S)/,"$1/").replace(/(jpeg|png)/,"$1.$1")} alt="图片" />
                    <figcaption className="timeArr">{this.props.info.time}25分钟</figcaption>
                </figure>
                <div className="infomation" >
                    <h4>{this.props.info.name}</h4>
                    <ul className="eval">
                        <li>评价星级</li>
                        <li>月售{this.props.info.recent_order_num}单</li>
                        <li>配送费{this.props.info.piecewise_agent_fee&&this.props.info.piecewise_agent_fee.extra_fee}</li>
                    </ul>
                </div>
            </div>
                </Link>
                <div className="notation" style={this.state}>
                        <h4>{this.props.info.name}</h4>
                        <ul>
                            <li>配送费￥{this.props.info.piecewise_agent_fee&&this.props.info.piecewise_agent_fee.extra_fee}</li>
                            <li>平均{this.props.info.time}分钟送达</li>
                        </ul>
                        <p>{this.props.info.description}</p>
                </div>

            </div>
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

                <div className='listItem'>
                {ListItem}
                </div>
        )
    }
}
export default HomeList;