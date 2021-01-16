import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from "react-router-dom"
import Login from '../comopoents/Login';
import Home from '../views/Home';
import Register from '../comopoents/Register'

class Appwz extends Component {
    render() {
        return (

            <Router >
                  <Link to="/"></Link>
                  <Link to="/home"></Link>
                  <Link to="/register"></Link>
                 <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        )
    }
}
export default Appwz;