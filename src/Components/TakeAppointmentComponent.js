import React, { Component } from 'react';
// import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
// import { scheduleData } from './datasource';
// import { extend } from '@syncfusion/ej2-base';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class TakeAppointment extends Component {
    constructor(props) {
        super(props);
        // this.data = extend([], scheduleData, null, true);
    }

    state = {
        doctor: this.props.doctor
    }

    render() {
        return (
            <div>
                <div><Header /></div>
                {/* <Header /> */}
                <div className="container">
                    <div className="row justify-content-center justify-items-center">
                        <div className="col-12 mb-3">
                            <h3 className="text-center">Take an appointment with {this.state.doctor.name} {this.state.doctor.surname}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ScheduleComponent width='90%' height='700px' startHour='09:00' endHour='17:00' className="col-12">
                            <ViewsDirective>
                                <ViewDirective option='WorkWeek'/>
                            </ViewsDirective>
                            <Inject services={[WorkWeek]}/>
                        </ScheduleComponent>;
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default TakeAppointment;