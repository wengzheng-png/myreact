import { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Shouye from './Shouye.js';
import'../css/MyHome.css';
class MyHome extends Component {
    render(){
        return(
            <div>
                <div className="toplan">
                    
                    
                        <Link to="/" className="link1 lin1" >首页</Link>
                        
                   
                        <Link to="/faxian" className="link1 lin1">发现</Link>
                        
                    
                        <Link to="/fujin" className="link1 lin1">附近</Link>
                        
                    
                        <Link to="/sousuo" className="link1">搜索</Link>
                       
                </div>
                <Switch>
                    <Route path="/" component={Shouye} exact></Route>
                    <Route path="/fujin" ></Route>
                    <Route path="/sousuo" ></Route>
                    <Route path="/myinfo" ></Route>
                </Switch>
            </div>
        );
    }
}

export default MyHome;