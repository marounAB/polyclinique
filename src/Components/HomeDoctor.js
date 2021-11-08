import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import HeaderDoctor from './HeaderDoctor';
import SearchBar from './SearchBarPatients';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';
import DoctorAppointments from './DoctorAppointments';
import DoctorSchedule from './DoctorScheduleComponent';

class HomeDoctor extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <HeaderDoctor/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 text-center" Style="padding-top:40px; max-height: 400px">
                            <h3 className="mb-3">List of Patients</h3>
                            <SearchBar patients={this.props.patients}/>
                        </div>
                        <div className="col-md-9 col-12">
                            {/* <h3>Appointments</h3> */}
                            <DoctorSchedule patients={this.props.patients} appointments={this.props.appointments} timeslots={this.props.timeslots} addAppointment={this.props.addAppointment} deleteAppointment={this.props.deleteAppointment} />
                            {/* <DoctorAppointments patients={this.props.patients} appointments={this.props.appointments} timeslots={this.props.timeslots}/> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeDoctor;

