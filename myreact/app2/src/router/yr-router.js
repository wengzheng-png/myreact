import { Component } from "react"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";
import PlacePage from "../pages/Place";
import FocusPage from "../pages/Focus";
import "../css/ss.css"

class MyRouter extends Component {
    render() {
        return (
            <div className="main"> 
                <Router>
                    <ul className="nav">
                        <li>
                            <Link to="/focus">关注</Link>
                        </li>
                        <li>
                            <Link to="/place">附近</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/focus" component={FocusPage}></Route>
                        <Route path="/place" component={PlacePage}></Route>
                        <Route path="/" component={FocusPage}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default MyRouter;