import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { connect } from 'react-redux';
import { addAppointment } from '../redux/ActionCreators';
import { withRouter } from 'react-router';

// const mapDispatchToProps = dispatch => ({
  
//   addAppointment: (idPatient, idDoctor, idTimeSlot, date) => 
//       dispatch( addAppointment(idPatient, idDoctor, idTimeSlot, date))
// })

// const mapStateToProps = state => {
//   return {
//     appointments: state.appointments,
//     doctors: state.doctors,
//     patients: state.patients,
//     timeslots: state.timeslots
//   }
// }

class TakeAppointment extends Component {
  constructor(props) {
    super(props);

    this.state={
      selectedDate: "",
    };
  }

  changeDate(d) {
    this.setState({selectedDate: d});
    localStorage.setItem("selectedDate", d);
  }

  componentDidMount() {
    this.setState({
      selectedDate: localStorage.getItem("selectedDate")
    });
  }

  take(id) {
    alert("doctor "+this.props.doctor.id + " timeslot " + id);
    this.props.addAppointment(localStorage.getItem('userId'), this.props.doctor.id, id, this.state.selectedDate);
  }

  render() {
    const dates = [];
    var tmpDate = new Date();
    var i = 0;
    while (i<4) {
      tmpDate.setDate(tmpDate.getDate()+1);
      if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
        dates.push(tmpDate.toLocaleDateString());
        i=i+1;
      }
    }

    const today = this.props.appointments.filter(app => app.idDoctor==this.props.doctor.id  && app.date==this.state.selectedDate);
    
    const slots = this.props.timeslots.map(timeslot => {
      // console.log(timeslot);
      for(var i=0; i<today.length; ++i) {
        // console.log(timeslot.id + " " + today[i].idTimeSlot);
        if (timeslot.id == today[i].idTimeSlot && today[i].idPatient == localStorage.getItem('userId')) {
          return (
            <div className="col-6 col-md-3">
              <div id={timeslot.id} className="chosen"><span>{timeslot.start}-{timeslot.end}</span></div>
            </div>  
          );
        } 
        if (timeslot.id == today[i].idTimeSlot) {
          return (
            <div className="col-6 col-md-3">
              <div id={timeslot.id} className="taken"><span>{timeslot.start}-{timeslot.end}</span></div>
            </div>  
          );
        }
      }
      return (
        <div className="col-6 col-md-3" onClick={() => this.take(timeslot.id)}>
          <div id={timeslot.id} className="choose"><span>{timeslot.start}-{timeslot.end}</span></div>
        </div>  
      );
    });

    console.log(this.state.selectedDate);
    const datesList = dates.map(date => {
      if (date == this.state.selectedDate) {
        return (
          <div className="col-6 col-md-3" onClick={() => this.changeDate(date)}>
            <div className="chosen"><span>{date}</span></div>
          </div>
        );  
      }
      return (
        <div className="col-6 col-md-3" onClick={() => this.changeDate(date)}>
          <div className="choose"><span>{date}</span></div>
        </div>
      );
    });

    return (
      <div>
        <Header />
        <div className="container PolyInfo">
          <div className="row text-center align-items-center">
            <h2 className="col-12">{this.props.doctor.name} {this.props.doctor.surname}</h2>
            <h2 className="col-12 mb-3">Speciality : {this.props.doctor.speciality}</h2>
            <h3 className="col-12">Choose a Date</h3>
            {datesList}
          </div>
          <hr />
          <div className="row text-center">
            <h3 className="col-12 mb-3">Choose an available timeslot for your appointment in {this.state.selectedDate}</h3>
            {slots}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TakeAppointment));
export default TakeAppointment;