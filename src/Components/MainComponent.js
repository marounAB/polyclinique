import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';
import DoctorsList from './DoctorsListComponent';
import { DOCTORS } from '../shared/doctors';
import HomeDoctor from './HomeDoctor';
import TakeAppointment from './TakeAppointmentComponent';
import DoctorInfo from './DoctorInfo';
import Infopatient from './Infopatient';
import ListClientAppointments from './ListClientAppointments';
import addDoctor from './AddNewDoctorComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      appointments: state.appointments
    }
  }
  
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
                <TakeAppointment doctor={this.state.doctorsList.filter((doctor) => doctor.id === parseInt(match.params.doctorId,10))[0]} 
                appointments={this.props.appointments}/>
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
<<<<<<< HEAD
                    
                        <Route path={"/infopatient/:patientId"} component={Infopatient} />
=======
                        <Route path={"/infopatient/:"} component={Infopatient} />
                        <Route path="/listClientAppointments" component={ListClientAppointments} />
                        <Route path="/addDoctor" component={addDoctor} />
>>>>>>> 993ef6bc456f3834aa21cefb9ad8db6dfbfe7a4d
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default withRouter(connect(mapStateToProps,)(Main));
