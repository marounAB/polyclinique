import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";

const imgStyle = {
    maxHeight: 128,
    maxWidth: 128
  }

const RenderADoctor = ({doctor}) => {
    return ( 
        <div className="ADoctor container">
            <Link to={`/doctorsList/${doctor.id}`} >
                <Media className="mt-5">
                    <Media className="row align-items-center">
                        <Media left top className="col-4">
                            <Media className="mr-5 mt-1 mb-1 imgStyle" object src={doctor.picture} alt={doctor.name} />
                        </Media>
                        <Media body className="col-8">
                            <div className="DocDesc">
                                <Media heading>
                                    {doctor.name} {doctor.surname}
                                </Media>
                                <p>{doctor.speciality}</p>
                            </div>
                        </Media>
                    </Media>
                </Media>
            </Link>
        </div>
    );
}

const DoctorsList = (props) => {
    const doctors = props.doctors.map((doctor) => {
        return (
            <div className="col-12 col-md-6" key={doctor.id}>
                <RenderADoctor doctor={doctor} />
            </div>
        )
    });

    return (
        <div>
            <Header />
            <div className="container PolyInfo">
                <div className="row">
                    <div className="col-12">
                        <h3>Choose a doctor to take appointment</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {doctors}
                </div>
            </div>
            <Footer />
        </div>        
    );
}

export default DoctorsList;