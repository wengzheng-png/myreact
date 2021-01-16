import React, {Component} from 'react';
import "../css/Login.css"
import axios from 'axios';
import PositionCarouselDemo from "../comopoents/Lunbo"

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            value1:"",//账号输入框的值
            value2:"",//密码输入框的值
            errflag1:false,
            errflag2:false,
            play:false

         };
         this.change1= this.change1.bind(this)
         this.change2= this.change2.bind(this)
         this.search= this.search.bind(this)
    };
    //匹配手机号
    change1(event){
        this.setState({value1: event.target.value},()=>{
                var reg = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
                 if(reg.test(this.state.value1)){
                     this.setState({
                        errflag1:true
                     })
                }else{
                    this.setState({
                        errflag1:false
                     })
                }
              
        })    
    };
    //匹配密码
    change2(event){
        this.setState({value2: event.target.value},()=>{
            
            var reg = /^[a-zA-Z](?![a-zA-Z]+$)\w{5,19}$/;
            if(reg.test(this.state.value2)){
                this.setState({
                   errflag2:true
                })
           }else{
            this.setState({
                errflag2:false
             })
           }
        })
    };
    //登录  注册 发送网络请求 跳转网页
    search(){
        // console.log(this.props);
        if(this.state.errflag1===true&&this.state.errflag1===true){
            // console.log(this.state.value1,this.state.value2);
            axios.post("http://192.168.43.62:7001",{username:this.state.value1,passwd:this.state.value2}).then((res)=>{
                // console.log(res);
                if(res.data.code===2000){
                    this.props.history.push("/home");
                }else{
                    this.props.history.push("/register");
                }
                   
                
            })
        }

       
    };

    render(){

       return(
          <div className="bigbox">
              <div className="mask"> 
                 <div className="inmask">
                    <div><h1>小蓝书</h1>
                    <span>标 记 我 的 生 活</span>
                  </div>
                  <div className="mid">
                     账 号:<input type="text" onChange={this.change1} /><br/>
                     {this.state.errflag1?<span className="check2">可以注册或者登录</span>: <span className="check">请输入正确的手机号</span>}<br/>      
                     密 码:<input type="password" onChange={this.change2}  /><br/>
                     {this.state.errflag2?<span className="check2">密码输入内容正确 </span>:<span className="check">密码字母开头6-20位 </span>}<br/>    
                     
                     <div className="btn">
                         <div className={this.state.errflag2?"inbtn":"inbtn2"} onClick={this.search}>登录/注册</div>
                     </div>
                 </div>
                 <div className="last">
                     <span>登录注册代表同意《用户协议》《隐私政策》</span><br/>
                     <span>和《联合统一认证服务条款》</span>
                 </div>
                 </div>

              </div>
            <PositionCarouselDemo></PositionCarouselDemo>
            
            
           </div>
       )

  }
}
export default Login


