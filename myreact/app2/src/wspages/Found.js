import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

import Recommend from "./Recommend"
import Fashion from "./Fashion"
import Shoes from "./Shoes"
import Nail from "./Nail"
import FoundDetail from "./FoundDetail"

import "../wscss/ss.css"

class Found extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">
                {/* 这个称为路由容器 */}
                <Router>

                    <ul className="nav">
                        <li>
                            <Link to="/recommend">推荐</Link>
                        </li>

                        <li>
                            <Link to="/fashion">时尚</Link>
                        </li>

                        <li>
                            <Link to="/shoes">潮鞋</Link>
                        </li>

                        <li>
                            <Link to="/nail">美甲</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/recommend" component={Recommend}></Route>  
                        <Route path="/fashion"  component={Fashion}></Route>
                        <Route path="/shoes"  component={Shoes}></Route>
                        <Route path="/nail"  component={Nail}></Route>

                        {/* 去详情页 */}
                        <Route path="/todetail"  component={FoundDetail}></Route>
                    </Switch>


                </Router>


            </div>
        )
    }
}

export default Found;