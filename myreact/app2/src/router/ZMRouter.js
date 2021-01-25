import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "../Page/Home";
import User from "../Page/User";
import "../css/zmcss/ZMRouter.css"
import ChangeInfo from "../Page/ChangeInfo";
export default function ZMRouter() {
  return (
    <Router>
      <div>
        <ul className="buttom_Bar">
          <li><Link to="/"  >主页面</Link></li>
          <li><Link to="/user">我的</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/userinfo/:user/:func" >
            <ChangeInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}