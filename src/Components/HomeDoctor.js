import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import HeaderDoctor from './HeaderDoctor';
import SearchBar from './SearchBarPatients';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from '@syncfusion/ej2-react-schedule';

class HomeDoctor extends Component{
    render(){
        return(
            <div>
                <HeaderDoctor/>
                <div className="container">
                    <div className="row">
                        <h3>List of clients</h3>
                        <div className="col-12" Style="padding-top:40px;">
                            <SearchBar/>
                        </div>
                    </div>
                    <div className="row" Style="padding-top: 80px;">
                        <h3>Schedule</h3>
                        <ScheduleComponent>
                            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                        </ScheduleComponent>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeDoctor;

