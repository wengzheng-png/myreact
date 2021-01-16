import axios from 'axios';
import "../css/register.css"
import React, {useState} from 'react';
// import {Route,Redirect, Router} from 'react-router-dom';

 function Register(props){
     var [state,setstate]=useState(0)
     var [mima,setmima]=useState(0)
     var [mima2,setmima2]=useState(0)
     var [sex,setsex]=useState(0)
     var [nike,setnike]=useState(0)
     var [ch,setch]=useState(0)
    function zhuce(p){
        if(state&&(mima===mima2)&&sex&&nike&&ch){
          // console.log(state,mima,mima2,sex,nike,ch);
          axios.post("http://192.168.43.62:7001/register",{username:state,passwd:mima,nicheng:nike,sex:sex})
          .then((res)=>{
             if(res.data.code===2000){
                    props.history.push("/")
             }
          }).catch((res)=>{
             console.log(res);
          })
        }
    
      
    };
    function shouji(e){
      setstate(e.target.value)
   };
   function wmima(e){
    setmima(e.target.value)
   };
   function wmima2(e){
    setmima2(e.target.value)
   };
   function wsex(e){
    setsex(e.target.value)
   };
   function wnike(e){
    setnike(e.target.value)
   };
   function getchack(e){
      setch(e.target.checked);
   }


    return(
        <div className="rbox">
        <div className="rhead">用户注册</div>
        <div className="shuru">
          <span>账号:</span><input placeholder="请输入手机号" className="input" onChange={shouji} /><br/>
          <span>密码:</span><input placeholder="请输入6-22位以字母开头" type="password" className="input" onChange={wmima}/><br/>
          <span>密码:</span><input placeholder="请再次输入密码" type="password" className="input" onChange={wmima2}/><br/>
          <span>性别:</span><input placeholder="请输入男或者女" className="input" onChange={wsex} /><br/>
          <span>昵称:</span><input placeholder="请输入" className="input"onChange={wnike}  /><br/>
          
          <div className="chose"><input type="checkbox" onClick={getchack} />勾选同意隐私服务条款</div>
          <div className="rzhuce" onClick={zhuce}>注册</div>
        </div>
        </div>
    )


}

// class Register extends Component{
//     constructor(){
//         super()
//     }


//     render(){
//         return(
//             <div>这是注册</div>
//         )
//     }
// }

export default  Register