import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { TIMESLOTS } from '../shared/timeslots';
import { APPOINTMENTS } from '../shared/appointments';
import { DOCTORS } from '../shared/doctors';

class ListClientAppointments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appointments: APPOINTMENTS.filter((app) => app.idPatient == localStorage.getItem('userId')).sort(function(a, b) {
                return (new Date(a.date)) - (new Date(b.date));
            }),
            timeslots: TIMESLOTS,
            doctors: DOCTORS
        }
    }

    delete(id) {
        const tmp = this.state.appointments.filter(app => app.id != id);
        this.setState({
            appointments: tmp
        })
    }

    render() {
        const listApps = this.state.appointments.map(app => {
            const time = this.state.timeslots.filter(t => t.id == app.idTimeSlot)[0];
            const doctor = this.state.doctors.filter(d => d.id == app.idDoctor)[0];
            return (
                <div className="col-12 app mb-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-10 col-12">
                                <h5>{doctor.name} {doctor.surname}</h5>
                                <h6>Speciality {doctor.speciality}</h6>
                                <div>
                                    date: {app.date} <br/>
                                    time: {time.start} - {time.end}
                                </div>
                            </div>
                            <div className="col-md-2 col-12 text-md-center mt-1">
                                <div className="btn btn-primary" onClick={() => this.delete(app.id)}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row mb-3">
                        {listApps}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ListClientAppointments;