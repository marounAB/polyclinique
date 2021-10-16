import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';
import DoctorsList from './DoctorsListComponent';
import { DOCTORS } from '../shared/doctors';
import HomeDoctor from './HomeDoctor';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            doctorsList: DOCTORS
        };
    }

    render(){
        return(
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/doctorsList" component={() => <DoctorsList doctors={this.state.doctorsList} />} />
                        <Route path="/Signup" component={Signup} />
                        <Route path="/medicalfile" component={FichierMedical} />
                        <Route path="/homedoctor" component={HomeDoctor} />
                        <Redirect to="/login" />
                    </Switch>
                </div>
                )
        }
}

export default Main;




