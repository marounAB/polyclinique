import React, { Component } from 'react';
// import { AppointmentPicker } from 'react-appointment-picker';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { TIMESLOTS } from '../shared/timeslots';
import { APPOINTMENTS } from '../shared/appointments';

class TakeAppointment extends Component {
  constructor(props) {
    super(props);

    this.state={
      timeslots: TIMESLOTS,
      selectedDate: "",
      appointments: APPOINTMENTS
    };

  }

  changeDate(d) {
    this.setState({selectedDate: d});
  }

  componentDidMount() {
    var tmpDate = new Date();
    var i = 0;
    while (i<1) {
      tmpDate.setDate(tmpDate.getDate()+1);
      if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
        this.setState({selectedDate: tmpDate.toLocaleDateString()});
        // this.setState({selectedDate: tmpDate});
        i=i+1;
      }
    }
  }

  take(id) {
    alert("doctor "+this.props.doctor.id + " timeslot " + id);
    const tmp = this.state.appointments;
    tmp.push({idDoctor: this.props.doctor.id, idPatient: 1, idTimeSlot: id, date: new Date(this.state.selectedDate)});
    this.setState({appointments: tmp});
  }

  render() {
    const dates = [];
    var tmpDate = new Date();
    var i = 0;
    while (i<4) {
      tmpDate.setDate(tmpDate.getDate()+1);
      if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
        dates.push(tmpDate.toLocaleDateString());
        // dates.push(tmpDate);
        i=i+1;
      }
    }

    // console.log(this.state.appointments);
    // console.log(this.state.appointments[0].date.toLocaleDateString());
    // console.log(this.state.selectedDate);
    // console.log(this.props.doctor.id)
    const today = this.state.appointments.filter(app => (app.date.toLocaleDateString()==this.state.selectedDate && app.idDoctor==this.props.doctor.id));
    // console.log(today);
    // console.log(this.state.timeslots);
    
    const slots = this.state.timeslots.map(timeslot => {
      console.log(timeslot);
      for(var i=0; i<today.length; ++i) {
        console.log(timeslot.id + " " + today[i].idTimeSlot);
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

// class TakeAppointment extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       continuousLoading: false
//     };
//   }

//   addAppointmentCallback = ({
//     addedAppointment: { day, number, time, id },
//     addCb
//   }) => {
//     this.setState(
//       {
//         loading: true
//       },
//       async () => {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         console.log(
//           `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
//         );
//         addCb(day, number, time, id);
//         this.setState({ loading: false });
//       }
//     );
//   };

//   render() {
//     const days = [];
//     const today = new Date();
//     const tmpDate = new Date(today);
//     for(var i=0; i<6; ++i) {
//       tmpDate.setDate(tmpDate.getDate()+1);
//       days.push([]);
//       if (tmpDate.getDay()==0 || tmpDate.getDay()==6) {
//         for(var j=1; j<=15; ++j) {
//           days[i].push({id: j,number: j, isReserved: true, periods: 2 });
//         }
//       } else {
//         for(var j=1; j<=15; ++j) {
//           days[i].push({id: j,number: j, isReserved: false, periods: 2 });
//         }
//       }
//     }
    
//     const tomorrow = new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     tomorrow.setHours(9, 0, 0, 0);
    
//     const { loading } = this.state;
    
//     return (
//       <div>
//         <Header />
//         <div className="container">
//           <div className="row">
//             <div className="col-12 justify-content-center text-center">
//               <h1>Appointment Picker</h1>
//               <div className="container mb-5">
//                 <div className="row">
//                   <AppointmentPicker
//                     addAppointmentCallback={this.addAppointmentCallback}
//                     removeAppointmentCallback={this.removeAppointmentCallback}
//                     initialDay={tomorrow}
//                     days={days}
//                     maxReservableAppointments={1}
//                     alpha
//                     visible
//                     selectedByDefault
//                     loading={loading}
//                     className="col-12"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

export default TakeAppointment;