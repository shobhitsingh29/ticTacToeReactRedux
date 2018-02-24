import React from "react";
import HomeContainer from "./containers/homeContainer";
import scoreBoardContainer from "./containers/scoreBoardContainer";
import {BrowserRouter as Router, Route, Switch, Redirect, browserHistory} from "react-router-dom";
export const App = () => (
    <Router history={browserHistory}>
        <Switch>

            <Redirect exact from="/" to="/home"/>
            <Route path="/home" component={HomeContainer}/>
            <Route path="/scoreBoard" component={scoreBoardContainer}/>
            <Route path='*' component={HomeContainer}/>
            <Redirect from='*' to='/home'/>
        </Switch>
    </Router>
);

export default App;
