import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class ListDescriptions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listApps = this.props.appointments.filter(app => new Date(app.date) <= new Date && app.description != "").map(app => {
            const time = this.props.timeslots.filter(t => t.id == app.idTimeSlot)[0];
            const doctor = this.props.doctors.filter(d => d.id == app.idDoctor)[0];
            return (
                <div className="col-12 app mb-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h5>{doctor.name} {doctor.surname}</h5>
                                <h6>Speciality {doctor.speciality}</h6>
                                <div>
                                    date: {app.date} <br/>
                                    time: {time.start} - {time.end}
                                    <br/>
                                </div>
                                <h6 className="mt-3">Description:</h6>
                                <p>{app.description}</p>
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

export default ListDescriptions;