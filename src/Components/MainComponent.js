import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';
import DoctorsList from './DoctorsListComponent';
import HomeDoctor from './HomeDoctor';
import TakeAppointment from './TakeAppointmentComponent';
import DoctorInfo from './DoctorInfo';
import Infopatient from './Infopatient';
import ListClientAppointments from './ListClientAppointments';
import addDoctor from './AddNewDoctorComponent';
import { connect } from 'react-redux';
import { addAppointment } from '../redux/ActionCreators';
import { deleteAppointment } from '../redux/ActionCreators';
import ListDescriptions from './ClientDescriptionsComponent';
import TodayAppointments from './TodayAppointmentsComponent';
import { addDescription } from '../redux/ActionCreators';
import { addAvailability } from '../redux/ActionCreators';
import { deleteAvailability } from '../redux/ActionCreators';
import DoctorAvailability from './DoctorAvailabilityComponent';
import { actions } from 'react-redux-form';
 
const mapStateToProps = state => {
    return {
      appointments: state.appointments,
      doctors: state.doctors,
      patients: state.patients,
      timeslots: state.timeslots,
      availabilities: state.availabilities
    }
  }
  
const mapDispatchToProps = dispatch => ({
  
    addAppointment: (idPatient, idDoctor, idTimeSlot, date) => 
        dispatch( addAppointment(idPatient, idDoctor, idTimeSlot, date)),
    deleteAppointment : (id) => dispatch(deleteAppointment(id)),
    addDescription : (id, idPatient, idDoctor, idTimeSlot, date, desc) => dispatch(addDescription(id, idPatient, idDoctor, idTimeSlot, date, desc)),
    addAvailability : (idDoctor, date, startTime, endTime) => dispatch(addAvailability(idDoctor, date, startTime, endTime)),
    deleteAvailability: (id) => dispatch(deleteAvailability(id)),
    resetLoginForm: () => {dispatch(actions.reset('login'))}
  })


  
class Main extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var tmpDate = new Date();
        var i = 0;
        while (i<1) {
            tmpDate.setDate(tmpDate.getDate()+1);
            if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
                localStorage.setItem("selectedDate", tmpDate.toLocaleDateString());
                i=i+1;
            }
        }
    }

    render(){
        const TakeAppointmentById = ({match}) => {
            return (
                <TakeAppointment doctor={this.props.doctors.filter((doctor) => doctor.id === parseInt(match.params.doctorId,10))[0]} 
                appointments={this.props.appointments} timeslots={this.props.timeslots} availabilities={this.props.availabilities}
                addAppointment={this.props.addAppointment}/>
            );
        };

        

        const PatientById = ({match}) => {
            return (
                <Infopatient patient={this.props.patients.filter(patient => patient.id === parseInt(match.params.patientId,10))[0]} appointments={this.props.appointments} timeslots={this.props.timeslots}/>
            );
        }

    
        return(
                <div>
                    <Switch>
                        <Route path={"/login"} component={() => <Login patients={this.props.patients} doctors={this.props.doctors} resetLoginForm={this.props.resetLoginForm}/>} />
                        <Route path={"/home"} component={HomePage} />
                        <Route exact path={"/doctorsList"} component={() => <DoctorsList doctors={this.props.doctors} />} />
                        <Route path={"/doctorsList/:doctorId"} component= {TakeAppointmentById} />
                        <Route path={"/Signup"} component={Signup} />
                        <Route path={"/medicalfile"} component={FichierMedical} />
                        <Route path={"/homedoctor"} component={() => <HomeDoctor patients={this.props.patients} appointments={this.props.appointments.filter(app => app.idDoctor == localStorage.getItem('userId'))} timeslots={this.props.timeslots}
                        addAppointment={this.props.addAppointment} deleteAppointment={this.props.deleteAppointment} availabilities={this.props.availabilities}/>} />
                        <Route path={"/doctorinfo"} component={DoctorInfo} />
                        <Route path={"/infopatient/:patientId"} component={PatientById} />
                        <Route path="/listClientAppointments" component={() => <ListClientAppointments 
                        deleteAppointment={this.props.deleteAppointment}
                        timeslots={this.props.timeslots} doctors={this.props.doctors} 
                        appointments={this.props.appointments.filter(app => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {return (new Date(a.date)) - (new Date(b.date));})}
                        />} />
                        <Route path="/addDoctor" component={addDoctor} />
                        <Route path="/listClientDescriptions" component={() => <ListDescriptions 
                        timeslots={this.props.timeslots} doctors={this.props.doctors} 
                        appointments={this.props.appointments.filter(app => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {return (new Date(b.date)) - (new Date(a.date));})}
                        />} />
                        <Route path="/todayAppointments" component={() => <TodayAppointments 
                        addDescription={this.props.addDescription}
                        patients={this.props.patients} 
                        appointments={this.props.appointments.filter(app => app.idDoctor == localStorage.getItem("userId") && app.date == (new Date).toLocaleDateString())} 
                        timeslots={this.props.timeslots}/>}/>
                        <Route path="/doctorAvailability" component={() => <DoctorAvailability
                        timeslots={this.props.timeslots} availabilities={this.props.availabilities} 
                        addAvailability={this.props.addAvailability}
                        deleteAvailability={this.props.deleteAvailability}/>} />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));