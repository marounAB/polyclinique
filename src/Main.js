import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomePage';

class Main extends Component{
    render(){

    return(
        <div>
    <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/login" component={Login}/>
              <Redirect to="/login" />
              </Switch>
              
</div>
              )
              }
}

export default Main;




