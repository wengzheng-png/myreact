// user页面的公共组件头部
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useRouteMatch,
    useHistory,
    useLocation,
} from "react-router-dom";
import Production from "./User/Production";
import Collect from "./User/Collect";
import Praise from "./User/Praise";
import "../../css/zmcss/UserTop.css";
import nv from "../../img/zmimg/woman.png";
import nan from "../../img/zmimg/man.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
/* 引入仓库 */

/*获取作品信息 */
function FunUserTop(props) {
    let htmlRef = React.createRef();
    /* 设置头像 背景图 昵称 id 性别 */
    const [arr1, setArr] = useState([]);

    const [userId, setId] = useState("");
    // let username = 12345678910;
    const [username, setName] = useState(18482048081);
    /* 设背景图片 */
    // const [touxiang, setImg] = useState("http://192.168.2.113:7001/public/src/img/zmimg/defaulttouxiang.png");
    const [touxiang, setImg] = useState("");
    const [bj1, setBj1] = useState("");
    useEffect(() => {
        if (!arr1.length) {
            axios(`http://192.168.2.113:7001/user/?username=${username}`)
                // axios(`http://192.168.43.230:7001/user/?username=${username}`)
                // axios(`http://192.168.50.199:7001/user/?username=${username}`)
                .then(result => {
                    setArr(result.data);
                    /* 设置用户ID */
                    setId(result.data[0].id);
                    /* 设置用户头像 */
                    setImg(result.data[0].touxiang);
                })
                .catch(err => {

                })
        }

        if (arr1[0]) {
            /* 修改背景图 */
            setBj1(arr1[0].bj1);
        }
    })

    // 根据是否有背景图片来选择样式渲染
    let color1 = {
        width: "100%",
        height: "4.4828rem",
        backgroundImage: `url("${bj1}")`,
        backgroundPosition: "0 0",
        backgroundSize: "100% 4.4828rem",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        boxSizing: "border-box",
        padding: "0.1724rem",
        backgroundColor: "#162B3C",
        backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0)),url("${bj1}")`,
    };
    let color2 = {
        width: "100%",
        height: "4.4828rem",
        padding: " 0.1724rem",
        boxSizing: "border-box",
        backgroundColor: "#162B3C",
        backgroundImage: "linear-gradient(to top, rgba(255,255,255,0.3), rgba(255,255,255,0))",
        position: "absolute",
    };

    /* 修改list = 自定义属性值  修改切换组件样式*/
    let color3 = {
        color: "#111111",
        borderBottom: "0.0345rem solid #FF2742",
        display: "inline-block"
    }
    const [list, setlist] = useState(0);

    function changelist(el) {
        setlist(Number(el.target.dataset.set))

    }
    /* 获取当前页面路由 */
    let { path } = useRouteMatch();
    /* 修改背景图片 */
    function changebj(event) {
        console.log(1111111);
        var data = new FormData();
        //分开单独写  好改需求
        data.append("beijing", event.target.files[0])
        data.append("username", username)
        axios.post(`http://192.168.2.113:7001/beijing`, data)
            // axios.post(`http://192.168.43.230:7001/beijing`, data)
            // axios.post(`http://192.168.50.199:7001/beijing`, data)
            .then(result => {
                setArr(result.data);
                /* 修改背景图 */
                setBj1(result.data[0].bj1);
            })
            .catch(err => {
                console.log(err);
            })
    }
    /* 修改头像 */
    function changetouxiang(event) {
        var data = new FormData();
        //分开单独写  好改需求
        data.append("touxiang", event.target.files[0])
        data.append("username", username)
        axios.post(`http://192.168.2.113:7001/touxiang`, data)
            // axios.post(`http://192.168.43.230:7001/touxiang`, data)
            // axios.post(`http://192.168.50.199:7001/touxiang`, data)
            .then(result => {
                setArr(result.data);
                // 修改头像
                setImg(result.data[0].touxiang);
            })
            .catch(err => {
                console.log(err);
            })
    }

    //添加历史记录
    let history = useHistory();
    let location = useLocation();
    function pushhistory(props) {
    };

    /* 接收子组件穿回来的值  并且修改状态 arr1 */
    function Father() {

    }
    /* 页面滚动到一定程度后 固定导航栏 */
    function goTop(event) {
        let top = window.pageYOffset
            || document.body.scrollTop
            || document.documentElement.scrollTop;

        let a = htmlRef.current;
        console.log(top, a);
        if (top >= 220) { //当页面滚动了300px后，显示固定的导航栏以及回到顶部按钮
            /*   a.style.position = "fixed";
              a.style.width = "100%";
              a.style.height = "0.6897rem";
              a.style.lineHeight = "0.6897rem";
              a.style.top = "0.6897rem";
              a.style.backgroundColor = "#fff";
              a.style.borderBottom = "0.0172rem solid rgba(204, 204, 204, 0.801)";
              a.style.borderTopLeftRadius = "0.1379rem";
              a.style.borderTopRightRadius = "0.1379rem"; */
        }
    }

    return (
        <div className="topbj" onWheel={goTop}>
            {/* 背景图片 */}
            <div style={bj1 ? color1 : color2} className="beijing_box">
                {/* 顶部第一个盒子 */}
                <div className="top_box">
                    {/* 更多 */}
                    <img src={require('../../img/zmimg/more.png').default} alt="" className="more" />
                    {/* 修改背景图片 */}
                    <div className="top-right-box">
                        {/* 判断有没有背景图片，有就不渲染这个换背景框 */}
                        {bj1 ? "" : <label className="fileinput">
                            <input type="file" className="inputbj" onChange={changebj} />
                            <div className="addbj"><img src={require('../../img/zmimg/hand.png').default} alt="" className="hand" />点此更换背景图片></div>
                        </label>}
                        <img src={require("../../img/zmimg/share.png").default} alt="" className="share" />
                    </div>
                </div>
                {/* 顶部第二个盒子 */}
                <div className="middle_box">
                    <div className="top_box2">
                        {/* 头像 */}
                        {touxiang ?
                            <label><input type="file" className="inputbj" onChange={changetouxiang} /><img className="touxiang" src={touxiang} alt="" /> </label> :
                            <label><input type="file" className="inputbj" onChange={changetouxiang} /><img className="touxiang" src="http://192.168.50.199:7001/public/src/img/zmimg/defaulttouxiang.png" alt="" /> </label>
                        }
                    </div>
                    {arr1[0] ? <ul className="userinfo">
                        <li className="nicheng">{arr1[0].nicheng}</li>
                        <li>账号：11185094{userId}</li>
                        {/* 性别 */}
                        {arr1[0].sex === "女" ? <li className="sex_box"><img src={nv} alt="" className="sex" /></li> : <li className="sex_box"><img src={nan} alt="" className="sex" /></li>}
                    </ul> : ""}
                </div>
                {/* 个性签名 */}
                {arr1[0] ? <p className="userInfo">{arr1[0].userInfo}</p> : ""}
                {/* 顶部第三个盒子 */}
                <div className="bottom_box">
                    <div className="production_info">
                        {arr1[0] ? <div className="count">{arr1[0].guanzhu}</div> : ""}
                        <div>关注</div>
                    </div>

                    <div className="production_info">
                        {arr1[0] ? <div className="count">{arr1[0].fensi}</div> : ""}
                        <div>粉丝</div>
                    </div>

                    <div className="production_info">
                        {arr1[0] ? <div className="count">{arr1[0].zan}</div> : ""}
                        <div>获赞与收藏</div>
                    </div>
                    {/* 编辑资料 */}
                    <Link className="changeInfo" to={`/userinfo/${username}/${Father}`}>编辑资料</Link>
                </div>
            </div>
            {/* 笔记 收藏 赞过 */}
            <div className="production_com" >
                <Router>
                    <div className="nav" id="sw" ref={htmlRef}>
                        <ul className="route_switch" onClick={changelist} >
                            <li> <Link to={`${path}/production`} style={list % 3 === 0 ? color3 : {}} data-set="0">笔记</Link> </li>
                            <li> <Link to={`${path}/collect`} style={list % 3 === 1 ? color3 : {}} data-set="1">收藏</Link> </li>
                            <li><Link to={`${path}/praise`} style={list % 3 === 2 ? color3 : {}} data-set="2">赞过</Link> </li>
                        </ul>
                        <Switch>
                            <Route path={`${path}/production`}>
                                <Production />
                            </Route>
                            <Route path={`${path}/collect`}>
                                <Collect />
                            </Route>
                            <Route path={`${path}/praise`}>
                                <Praise />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>

        </div >

    )
}
export default FunUserTop