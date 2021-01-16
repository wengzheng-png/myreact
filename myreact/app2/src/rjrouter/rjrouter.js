import { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import YidengPage from '../pages/YidengPage.js';
class RjRouter extends Component {
    render(){
        return(
<Router>
    <Switch>
        <Route path="/" component={YidengPage}></Route>
    </Switch>
</Router>
        )
    }
}

export default RjRouter;