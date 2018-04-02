import React from 'react';
import './footer.scss'
//底部导航栏
const Footer=()=>(
    <div className='footer'>
        <div className="left">
                <uL>
                    <li>用户帮助</li>
                    <li><a>服务中心</a></li>
                    <li><a>常见问题</a></li>
                </uL>
                <ul>
                    <li>商务合作</li>
                    <li><a>我要开店</a></li>
                    <li><a>加盟指南</a></li>
                    <li><a>市场合作</a></li>
                    <li><a>开放平台</a></li>
                </ul>
                <ul>
                    <li>关于我们</li>
                    <li><a>饿了么介绍</a></li>
                    <li><a>加入我们</a></li>
                    <li><a>联系我们</a></li>
                    <li><a>规则中心</a></li>
                </ul>
        </div>
            <div className="right">
                <ul>
                    <li>24小时客服热线：10105757</li>
                    <li>意见反馈：feedback@ele.me</li>
                    <li>关注我们：<span>微博</span><span>微信</span></li>
                </ul>
                <p>
                    <img src="./image/info.png"/>
                    <span>下载手机版</span><br/>扫一扫，手机订餐方便
                </p>
            </div>
    </div>
)
export default Footer