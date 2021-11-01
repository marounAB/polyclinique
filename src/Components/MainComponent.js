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
      appointments: state.appointments,
      doctors: state.doctors,
      patients: state.patients
    }
  }
  
class Main extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const TakeAppointmentById = ({match}) => {
            return (
                <TakeAppointment doctor={this.props.doctors.filter((doctor) => doctor.id === parseInt(match.params.doctorId,10))[0]} 
                appointments={this.props.appointments}/>
            );
        };

        const PatientById = ({match}) => {
            return (
                <Infopatient patient={this.props.patients.filter(patient => patient.id === parseInt(match.params.patientId,10))[0]} />
            );
        }

        return(
                <div>
                    <Switch>
                        <Route path={"/login"} component={Login} />
                        <Route path={"/home"} component={HomePage} />
                        <Route exact path={"/doctorsList"} component={() => <DoctorsList doctors={this.props.doctors} />} />
                        <Route path={"/doctorsList/:doctorId"} component= {TakeAppointmentById} />
                        <Route path={"/Signup"} component={Signup} />
                        <Route path={"/medicalfile"} component={FichierMedical} />
                        <Route path={"/homedoctor"} component={() => <HomeDoctor patients={this.props.patients}/>} />
                        <Route path={"/doctorinfo"} component={DoctorInfo} />
                        <Route path={"/infopatient/:patientId"} component={PatientById} />
                        <Route path="/listClientAppointments" component={ListClientAppointments} />
                        <Route path="/addDoctor" component={addDoctor} />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default withRouter(connect(mapStateToProps,)(Main));
