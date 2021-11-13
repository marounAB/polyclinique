import React, { Component } from 'react';
import HeaderDoctor from './HeaderDoctor';
import ListApps from './ListAppsComponent';

class TodayAppointments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listApps = this.props.appointments.filter(app => app.description == "" && app.idPatient!=0).sort(function(a, b) {return a.idTimeSlot - b.idTimeSlot;}).map(app => {
            const time = this.props.timeslots.filter(t => t.id == app.idTimeSlot)[0];
            const patient = this.props.patients.filter(d => d.id == app.idPatient)[0];
            return (
                    <ListApps addDescription={this.props.addDescription} app={app} patient={patient} time={time} />
                    )
                });

        return(
            <div>
                <HeaderDoctor />
                <div className="container">
                    <div className="row mb-3">
                        {listApps}
                    </div>
                </div>
            </div>
        )
    }
}

export default TodayAppointments;