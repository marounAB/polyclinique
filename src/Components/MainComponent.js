import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';
import DoctorsList from './DoctorsListComponent';
import { DOCTORS } from '../shared/doctors';
import HomeDoctor from './HomeDoctor';
import TakeAppointment from './TakeAppointmentComponent';
import DoctorInfo from './DoctorInfo';
import Infopatient from './Infopatient';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            doctorsList: DOCTORS
        };
    }

    render(){
        const TakeAppointmentById = ({match}) => {
            return (
                <TakeAppointment doctor={this.state.doctorsList.filter((doctor) => doctor.id === parseInt(match.params.doctorId,10))[0]} />
            );
        };

        return(
                <div>
                    <Switch>
                        <Route path={"/login"} component={Login} />
                        <Route path={"/home"} component={HomePage} />
                        <Route exact path={"/doctorsList"} component={() => <DoctorsList doctors={this.state.doctorsList} />} />
                        <Route path={"/doctorsList/:doctorId"} component= {TakeAppointmentById} />
                        <Route path={"/Signup"} component={Signup} />
                        <Route path={"/medicalfile"} component={FichierMedical} />
                        <Route path={"/homedoctor"} component={HomeDoctor} />
                        <Route path={"/doctorinfo"} component={DoctorInfo} />
                        <Route path={"/infopatient/:"} component={Infopatient} />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default Main;




