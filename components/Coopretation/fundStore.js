/**
 * Created by zzl on 2017/7/25.
 */
//我要开店页面
import React from 'react';
import ReactDOM from 'react-dom';
import man1 from '../../image/man1.png';
import man2 from "../../image/man2.png";
import man4 from "../../image/man4.png";
import man5 from "../../image/man4.png"
import './fundStore.scss'
const Header=()=>(
    <header>
        <section>
            <p className="left">
                <span>饿了么</span> 商户中心
            </p>
            <p className="right">
                <a href="https://napos-introduce.faas.ele.me/apps/mobile/">客户端下载</a>
                客服电话：021-80203777
            </p>
        </section>
        <section>
            <p>加入饿了么 开店赚大钱</p>
            <p>
                <ul>
                    <li><span>24</span>小时<br/>极速开店</li>
                    <li><span>900</span>万<br/>每日订单</li>
                    <li><span>150</span>万<br/>优质商家</li>
                    <li><span>700</span>城市<br/>全国覆盖</li>
                </ul>
            </p>
        </section>
        <section>
            <p>
                <button>自主开店</button>
               <span>填写完整门店信息，24小时极速开店</span>
            </p>
            <p>
                <button>帮我开店</button>
                <span>仅提交基础信息，专属市场经理替你开店</span>
            </p>
        </section>
    </header>
)
const ShowPic=()=>(
    <section>
        <p>他们已入驻，你呢？</p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </section>
)
const Gallery=()=>(
    <section className="gallery">
        <ul>
            <li>
                <p>
                    <span>尤泽明</span><br/>YOU ZE MING<br/><span>五四拌肉饭与脆皮鸡</span><br/>
                    "因为一次无意看到饿了么的传单，辞掉了工作做起了外卖，现在每天净赚1500多，感谢饿了么，让我的第一次创业就这么成功"

                </p>
                <img src={man1}/>
            </li>
            <li>
                <p>
                    <span>马云</span><br/>
                    <span>MA YUN</span><br/>
                    <span>阿里巴巴创始人</span><br/>
                    “4月13日，饿了么对外宣布与阿里巴巴及蚂蚁金服达成战略合作协议，获得12.5亿美元投资，并保持独立的运营和发展”
                </p>
                <img src={man2}/>
            </li>
            <li>
                <p>
                    <span>张旭豪</span><br/>
                    <span>ZHANG XU HAO</span><br/>
                    <span>饿了么创始人</span><br/>
                   “ 以前运营靠经验，现在为饿了么老板定制方案，新用户拉新，老用户促活。未来甚至你还没开店，都能用我们的数据去看哪个区域开什么店好”
                </p>
                <img src={man4}/>
            </li>
        </ul>
    </section>
)
const Footer=()=>(
      <footer>
          <section className="left">
              <ul>
                  <li>用户帮助</li>
                  <li><a>服务中心</a></li>
                  <li><a>常见问题</a></li>
              </ul>
              <ul>
                  <li>商务合作</li>
                  <li><a>加盟指南</a></li>
                  <li><a>市场合作</a></li>
              </ul>
              <ul>
                  <li>关于我们</li>
                  <li><a>饿了么介绍</a></li>
                  <li><a>加入我们</a></li>
                  <li><a>联系我们</a></li>
                  <li><a>服务协议</a></li>
              </ul>
              <ul>
                  <li>其他</li>
                  <li><a>餐厅办证流程</a></li>
                  <li><a>餐厅经营卫生标准</a></li>
              </ul>
          </section>
          <section className="right">
              <ul>
                  <li>服务热线：021-80203777</li>
                  <li>服务时间：周一至周日 9:00-24:00</li>
                  <li>反馈意见：feedback@ele.me</li>
                  <li>
                      <img src="../image/qr-code.png"/>
                      <p>扫码关注饿了么商学院 教你如何赚大钱</p>
                  </li>
              </ul>
          </section>
      </footer>
)
const App=()=>(
    <div>
        <Header/>
        <ShowPic/>
        <Gallery/>
        <Footer/>
    </div>
)
ReactDOM.render(<App/>,document.getElementById('root'))