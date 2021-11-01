import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import { ListAppointments } from '../shared/doctorappointments';


import { Button} from 'reactstrap';





function DoctorAppointments(){

    

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
      data={ListAppointments}
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
      <Appointments appointmentComponent={Appointment} >
     
        </Appointments>
        <AppointmentTooltip showOpenButton />
  
 
      <AllDayPanel />
    </Scheduler>
 
)


}

export default DoctorAppointments;
  


