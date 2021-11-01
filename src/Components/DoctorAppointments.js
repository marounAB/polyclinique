import * as React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';

function DoctorAppointments(props){
  const Appointment = ({
    children, style, ...restProps
  }) => (
    
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        borderRadius: '8px',
        height:'100%',
        width:'100%'
      }} 
    >
      {children}
    </Appointments.Appointment>
  );
  
  const ListAppointments = props.appointments.map(app => {
    var patient = props.patients.filter(p => p.id === app.idPatient)[0];
    var p = patient.name + " " + patient.surname;
    var timeslot = props.timeslots.filter(t => t.id === app.idTimeSlot)[0];
    var sd = new Date(app.date + " " + timeslot.start + ":00");
    var ed = new Date(app.date + " " + timeslot.end + ":00");
    return (
      {
        title: p,
        startDate: sd,
        endDate: ed,
        id: app.id,
        location: ''
      }
      )
  });

  return(      
    <Scheduler
      data={ListAppointments}
      height={660}
    >
      <ViewState
         currentDate ={new Date()}
      />
      <WeekView
        startDayHour={8}
        endDayHour={17}
        cellDuration={30}
      />
      <Appointments appointmentComponent={Appointment} >
     
        </Appointments>
        <AppointmentTooltip showOpenButton />
  
      <AllDayPanel />
    </Scheduler>
    )
  }

export default DoctorAppointments;
  


