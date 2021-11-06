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

const mapStateToProps = state => {
    return {
      appointments: state.appointments,
      doctors: state.doctors,
      patients: state.patients,
      timeslots: state.timeslots
    }
  }
  
const mapDispatchToProps = dispatch => ({
  
    addAppointment: (idPatient, idDoctor, idTimeSlot, date) => 
        dispatch( addAppointment(idPatient, idDoctor, idTimeSlot, date)),
    deleteAppointment : (id) => dispatch(deleteAppointment(id))
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
                appointments={this.props.appointments} timeslots={this.props.timeslots}
                addAppointment={this.props.addAppointment}/>
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
                        <Route path={"/homedoctor"} component={() => <HomeDoctor patients={this.props.patients} appointments={this.props.appointments.filter(app => app.idDoctor == localStorage.getItem('userId'))} timeslots={this.props.timeslots}/>} />
                        <Route path={"/doctorinfo"} component={DoctorInfo} />
                        <Route path={"/infopatient/:patientId"} component={PatientById} />
                        <Route path="/listClientAppointments" component={() => <ListClientAppointments 
                        deleteAppointment={this.props.deleteAppointment}
                        timeslots={this.props.timeslots} doctors={this.props.doctors} 
                        appointments={this.props.appointments.filter(app => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {return (new Date(a.date)) - (new Date(b.date));})}
                        />} />
                        <Route path="/addDoctor" component={addDoctor} />
                        <Redirect to={"/login"} />
                    </Switch>
                </div>
                )
        }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
