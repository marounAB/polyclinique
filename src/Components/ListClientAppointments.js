import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class ListClientAppointments extends Component {
    constructor(props) {
        super(props);
    }

    delete(id) {
        this.props.deleteAppointment(id);
    }

    render() {
        const listApps = this.props.appointments.filter(app => new Date(app.date) > new Date).map(app => {
            const time = this.props.timeslots.filter(t => t.id == app.idTimeSlot)[0];
            const doctor = this.props.doctors.filter(d => d.id == app.idDoctor)[0];
            const speciality = this.props.specialities.filter(s => s.id == doctor.idSpeciality)[0].description;
            return (
                <div className="col-12 app mb-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-10 col-12">
                                <h5>{doctor.name} {doctor.surname}</h5>
                                <h6>Speciality {speciality}</h6>
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