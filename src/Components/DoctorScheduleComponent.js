import React, { Component } from 'react';

class DoctorSchedule extends Component {
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
    alert("doctor "+ localStorage.getItem('userId') + " timeslot " + id);
    this.props.addAppointment(0, parseInt(localStorage.getItem('userId')), id, this.state.selectedDate);
  }

  delete(id) {
      alert("delete")
      this.props.deleteAppointment(id);
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

    const today = this.props.appointments.filter(app => app.idDoctor==localStorage.getItem('userId')  && app.date==this.state.selectedDate);
    
    const slots = this.props.timeslots.map(timeslot => {
      // console.log(timeslot);
      for(var i=0; i<today.length; ++i) {
        // console.log(timeslot.id + " " + today[i].idTimeSlot);
        if (timeslot.id == today[i].idTimeSlot && today[i].idPatient == 0) {
          return (
            <div className="col-6 col-md-3" onClick={() => this.delete(today[i].id)}>
              <div id={timeslot.id} className="chosen">Break<br/>{timeslot.start}-{timeslot.end}</div>
            </div>  
          );
        } 
        if (timeslot.id == today[i].idTimeSlot) {
            const patient = this.props.patients.filter(p => p.id == today[i].idPatient)[0];
          return (
            <div className="col-6 col-md-3">
              <div id={timeslot.id} className="taken">{patient.name} {patient.surname}<br/>{timeslot.start}-{timeslot.end}</div>
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
        <div className="container PolyInfo">
          <div className="row text-center align-items-center">
            <h3 className="col-12">Choose a Date</h3>
            {datesList}
          </div>
          <hr />
          <div className="row text-center">
            <h3 className="col-12 mb-3">Your schedule in {this.state.selectedDate}</h3>
            {slots}
          </div>
        </div>
    );
  }
}

// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TakeAppointment));
export default DoctorSchedule;