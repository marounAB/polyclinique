import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';

import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';




function DoctorAppointments(){

    const appointments = [
        {
          title: 'Patient 1',
          startDate: new Date(2021, 10, 27, 9, 30),
          endDate: new Date(2021, 5, 25, 10, 30),
          id: 0,

          location: 'Room 1',
        }, {
          title: 'Patient 2',
          startDate: new Date(2021, 10, 27, 12, 0),
          endDate: new Date(2021, 5, 25, 12, 30),
          id: 1,
          location: 'Room 1',
        }, {
          title: 'Patient 3 ',
          startDate: new Date(2021, 10, 25, 14, 30),
          endDate: new Date(2021, 10, 25, 15, 0),
          id: 2,
          location: 'Room 2',
        },{
          title: 'Patient 4',
          startDate: new Date(2021, 10, 26, 12, 0),
          endDate: new Date(2021, 10, 26, 12, 30),
          id: 4,
          location: 'Room 2',
        }, {
          title: 'patient 5',
          startDate: new Date(2021, 10, 26, 14, 30),
          endDate: new Date(2021, 10, 26, 15, 0),
          id: 5,
          location: 'Room 2',
        }];

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


   

    return(
        
    <Scheduler
      data={appointments}
      height={660}
    
      
    >
      <ViewState
         currentDate ={new Date(2021,10,25)}
      />
      <WeekView
        startDayHour={8}
        endDayHour={18}
        cellDuration={30}
      />
      <Appointments appointmentComponent={Appointment}  />
      
 
       
      <AllDayPanel />
    </Scheduler>
 
)


}

export default DoctorAppointments;
  


