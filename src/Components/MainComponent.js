import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';

class Main extends Component{
    render(){

    return(
        <div>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={Login}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/medicalfile" component={FichierMedical}/>

                {/* <Route path="/home" Component={HomePage}/> */}
                <Redirect to="/login" />
            </Switch>
              
</div>
              )
              }
}

export default Main;




