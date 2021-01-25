import "../css/zmcss/ChangeInfo.css";
import React, { useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function ChangeInfo(props) {
    //获取历史记录
    let history = useHistory();
    //获取Location对象
    let location = useLocation();
    let { user, func } = useParams();
    /* 名字   小红书号  性别  生日  地区   个人简介   背景图    更多信息   学校   兴趣   二维码 */
    const [arr2, setArr2] = useState([]);
    /* const [name, setname] = useState("");
    const [userId, setuserId] = useState("");
    const [usersex, setuserSex] = useState("");
    const [birthday, setBirth] = useState("");
    const [place, setPlace] = useState("");
    const [introd, setintrod] = useState("");
    const [bj, setBj] = useState("");
    const [touxiang, setTou] = useState(""); */
    useEffect(() => {
        if (!arr2.length) {
            axios(`http://192.168.2.113:7001/user/?username=${user}`)
            // axios(`http://192.168.43.230:7001/user/?username=${user}`)
            // axios(`http://192.168.50.199:7001/user/?username=${user}`)
                .then(result => {
                    setArr2(result.data);
                })
                .catch(err => {

                })
        }
    })
    var arr3 = [{ name: "", userId: "", usersex: "", birthday: "", place: "", introd: "", bj: "", touxiang: "" }];

    if (arr2[0]) {
        console.log("if1233");
        arr3[0].userId = "11185094" + arr2[0].id;
        arr3[0].usersex = arr2[0].sex;
        if (arr2[0].nicheng) {

            arr3[0].name = arr2[0].nicheng;
        } if (arr2[0].userInfo) {

            arr3[0].introd = arr2[0].userInfo;
        } if (arr2[0].bj1) {

            arr3[0].bj = arr2[0].bj1;
        } if (arr2[0].touxiang) {

            arr3[0].touxiang = arr2[0].touxiang;
        }
    }
    /* 修改名字 */
    function changeName(event) {

    };
    /*修改小红书号 */
    function changeUserid(event) {

    };

    /*修改性别 */
    function changeSex(event) {

    };
    /*修改生日 */
    function changeBirth(event) {

    };
    /*修改地区 */
    function changePlace(event) {

    };
    /*修改个人简介 */
    function changeSignature(event) {

    };
    /*修改背景图 */
    function changeBjimg(event) {

    };
    /* 表单提交事件 */
    function submit(event) {
        event.preventDefault();
    };
    //回退
    function goback1() {
        history.goBack();
    };
    return (
        <div className="box">
            <div className="goback">
                <div className="arrow" onClick={goback1}>&lt;</div><div>编辑资料</div>
            </div>

            {/* <div onSubmit={submit}>
                <div><img src={touxiang} /></div>
                <div><div>名字</div><div>{name}</div></div>

            </div> */}


            {/*  <form onSubmit={submit}>
                <input type="text" name="username" onChange={changeName} />
                <input type="text" name="userid" onChange={changeUserid} />
                <input type="text" name="sex" onChange={changeSex} />
                <input type="text" name="birth" onChange={changeBirth} />
                <input type="text" name="place" onChange={changePlace} />
                <input type="text" name="signature" onChange={changeSignature} />
                <input type="text" name="bjimg" onChange={changeBjimg} />
            </form> */}
        </div>
    )
}
export default ChangeInfo;