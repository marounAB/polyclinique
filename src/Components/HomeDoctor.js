import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import HeaderDoctor from './HeaderDoctor';
import SearchBar from './SearchBarPatients';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';
import DoctorAppointments from './DoctorAppointments';

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
                        <h3>List of clients</h3>
                        <div className="col-12" Style="padding-top:40px;">
                            <SearchBar patients={this.props.patients}/>
                        </div>
                    </div>
                    <div className="row" Style="padding-top: 80px;">
                        <h3>Appointments</h3>
                        <DoctorAppointments patients={this.props.patients} appointments={this.props.appointments} timeslots={this.props.timeslots}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeDoctor;

