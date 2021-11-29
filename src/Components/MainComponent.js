import React, { Component } from 'react';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import HomePage from './HomeClientComponent';
import Signup from './Signup';
import FichierMedical from './Fichiermedical';
import DoctorsList from './DoctorsListComponent';
import HomeDoctor from './HomeDoctor';
import TakeAppointment from './TakeAppointmentComponent';
import Infopatient from './Infopatient';
import ListClientAppointments from './ListClientAppointments';
import AddDoctor from './AddDoctorComponent';
import { connect } from 'react-redux';
import ListDescriptions from './ClientDescriptionsComponent';
import TodayAppointments from './TodayAppointmentsComponent';
import DoctorAvailability from './DoctorAvailabilityComponent';
import { actions } from 'react-redux-form';
import { fetchAppointments } from '../redux/ActionCreators';
import { postAppointment } from '../redux/ActionCreators';
import { removeAppointment } from '../redux/ActionCreators';
import { putDescription } from '../redux/ActionCreators';
import { fetchDoctors } from '../redux/ActionCreators';
import { fetchPatients } from '../redux/ActionCreators';
import { fetchTimeslots } from '../redux/ActionCreators';
import { fetchSpecialities } from '../redux/ActionCreators';
import { fetchProfessions } from '../redux/ActionCreators';
import { fetchAvailabilities } from '../redux/ActionCreators';
import { postAvailability } from '../redux/ActionCreators';
import { removeAvailability } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      appointments: state.appointments,
      doctors: state.doctors,
      patients: state.patients,
      timeslots: state.timeslots,
      availabilities: state.availabilities,
      specialities: state.specialities,
      professions: state.professions

    }
  }
  
const mapDispatchToProps = dispatch => ({
  
    postAppointment: (idPatient, idDoctor, idTimeSlot, date) => 
        dispatch( postAppointment(idPatient, idDoctor, idTimeSlot, date)),
    removeAppointment : (id) => dispatch(removeAppointment(id)),
    putDescription : (id, idPatient, idDoctor, idTimeSlot, date, desc) => dispatch(putDescription(id, idPatient, idDoctor, idTimeSlot, date, desc)),
    addAvailability : (idDoctor, date, startTime, endTime) => dispatch(postAvailability(idDoctor, date, startTime, endTime)),
    deleteAvailability: (id) => dispatch(removeAvailability(id)),
    resetLoginForm: () => {dispatch(actions.reset('login'))},
    fetchAppointments: () => dispatch(fetchAppointments()),
    fetchDoctors: () => dispatch(fetchDoctors()),
    fetchPatients: () => dispatch(fetchPatients()),
    fetchTimeslots: () => dispatch(fetchTimeslots()),
    fetchSpecialities: () => dispatch(fetchSpecialities()),
    fetchProfessions: () => dispatch(fetchProfessions()),
    fetchAvailabilities: () => dispatch(fetchAvailabilities())

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

        this.props.fetchAppointments();
        this.props.fetchDoctors();
        this.props.fetchPatients();
        this.props.fetchProfessions();
        this.props.fetchSpecialities();
        this.props.fetchTimeslots();
        this.props.fetchAvailabilities();
    }

    render(){
        const TakeAppointmentById = ({match}) => {
            return (
                <TakeAppointment doctor={this.props.doctors.doctors.filter((doctor) => doctor._id === match.params.doctorId,10)[0]} 

                appointments={this.props.appointments.appointments} timeslots={this.props.timeslots.timeslots} availabilities={this.props.availabilities.availabilities}

                addAppointment={this.props.postAppointment} />
            );
        };

        

        const PatientById = ({match}) => {
            return (
                <Infopatient professions={this.props.professions.professions} patient={this.props.patients.patients.filter((patient) => patient._id === match.params.patientId,10)[0]} appointments={this.props.appointments.appointments} timeslots={this.props.timeslots.timeslots}/>
            );
        }

    
        return(
                <div>
                    <Switch>
                        <Route path={"/login"} component={() => <Login patients={this.props.patients.patients} doctors={this.props.doctors.doctors} resetLoginForm={this.props.resetLoginForm}/>} />
                        <Route path={"/home"} component={HomePage} />
                        <Route exact path={"/doctorsList"} component={() => <DoctorsList doctors={this.props.doctors.doctors} specialities={this.props.specialities.specialities} />} />
                        <Route path={"/doctorsList/:doctorId"} component= {TakeAppointmentById} />
                        <Route path={"/Signup"} component={Signup} />
                        <Route path={"/medicalfile"} component={FichierMedical} />

                        <Route path={"/homedoctor"} component={() => <HomeDoctor patients={this.props.patients.patients} appointments={this.props.appointments.appointments.filter(app => app.idDoctor == localStorage.getItem('userId'))} timeslots={this.props.timeslots.timeslots}
                        addAppointment={this.props.postAppointment} deleteAppointment={this.props.removeAppointment} availabilities={this.props.availabilities.availabilities}/>} />

                        <Route path={"/infopatient/:patientId"} component={PatientById} />
                        <Route path="/listClientAppointments" component={() => <ListClientAppointments 
                        deleteAppointment={this.props.removeAppointment}
                        timeslots={this.props.timeslots.timeslots} doctors={this.props.doctors.doctors} specialities={this.props.specialities.specialities}
                        appointments={this.props.appointments.appointments.filter(app => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {return (new Date(a.date)) - (new Date(b.date));})}
                        />} />
                        <Route path="/addDoctor" component={() => <AddDoctor doctors={this.props.doctors.doctors} patientEmails={this.props.patients.patients.map(patient => patient.email)}/>} />      
                        <Route path="/listClientDescriptions" component={() => <ListDescriptions 
                        timeslots={this.props.timeslots.timeslots} doctors={this.props.doctors.doctors} specialities={this.props.specialities.specialities}
                        appointments={this.props.appointments.appointments.filter(app => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {return (new Date(b.date)) - (new Date(a.date));})}
                        />} />
                        <Route path="/todayAppointments" component={() => <TodayAppointments 
                        addDescription={this.props.putDescription}
                        patients={this.props.patients.patients} 
                        appointments={this.props.appointments.appointments.filter(app => app.idDoctor == localStorage.getItem("userId") && app.date == (new Date).toLocaleDateString())} 
                        timeslots={this.props.timeslots.timeslots}/>}/>
                        <Route path="/doctorAvailability" component={() => <DoctorAvailability
                        timeslots={this.props.timeslots.timeslots} availabilities={this.props.availabilities.availabilities}
                       
                        addAvailability={this.props.addAvailability}
                        deleteAvailability={this.props.deleteAvailability}/>} />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));