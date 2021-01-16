import { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import MyHome from '../component/MyHome.js';
import '../css/YidengPage.css'
class YidengPage extends Component {
    render() {
        return(
            <div className="YidengPage">
                <div className="bottomlan">
                    <span className="span1" >
                    <Link to="/" className="link ">首页</Link>
                    </span>
                
                    <span className="span2" >
                    <Link to="/myinfo" className="link">我的</Link>
                    </span>
                </div>

                <Switch>
                    <Route path="/" component={MyHome} exact></Route>
                    <Route path="/myinfo"></Route>
                </Switch>
            </div>
        ) 
    }
}

export default YidengPage;
