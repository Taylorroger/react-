/**
 * Created by zzl on 2017/8/31.
 */
import React from 'react';
import {Link} from 'react-router'
import './serv.scss'
const Service=()=>(
    <article className="serv">
         <section className="left">
        <p>常见问题</p>
        <ul className="ques1">
            <li>订餐支付</li>
            <li>催单配送</li>
            <li>售后服务</li>
            <li>网站规则</li>
        </ul>
            <ul className="ques2">
                <li><Link to="/Not2">1.使用余额宝支付不了？</Link></li>
                <li><Link to="/Not2">2.在线支付订单取消后，钱怎么返还？</Link></li>
                <li><Link to="/Not2">3.饿了么账户里的款项怎么提现？</Link></li>
                <li><Link to="/Not2">4.一个红包能拆开多次使用吗？</Link></li>
                <li><Link to="">5.下单的时候使用了红包，但是后来订单取消了，红包还会...</Link></li>
                <li><Link to="bullet">查看更多</Link></li>
                <li><Link to="">6.什么是超时赔付？</Link></li>
                <li><Link to="">7.返还红包活动，红包领取规则是什么？</Link></li>
                <li><Link to="">8.邀请好友了，为什么没获得红包？</Link></li>
                <li><Link to="">9.积分如何计算</Link></li>
             <li><Link to="">10.礼品兑换很对天了没有收到，怎么办？</Link></li>
                <li></li>
            </ul>
         </section>
        <section className="right">
            <p><span>在线客服</span><br/>每天24小时为您解答疑惑<br/>请下载饿了么App咨询</p>
            <p>24小时客服热线<br/><span>1010-5757</span></p>
        </section>
    </article>
)
export default Service
