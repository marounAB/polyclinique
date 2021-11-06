import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import HeaderDoctor from './HeaderDoctor';
import ListApps from './ListAppsComponent';

class TodayAppointments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listApps = this.props.appointments.sort(function(a, b) {return (new Date(a.idTimeSlot)) - (new Date(b.idTimeSlot));}).filter(app => app.description == "").map(app => {
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