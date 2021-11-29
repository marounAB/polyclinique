import React, { Component } from 'react';
import HeaderDoctor from './HeaderDoctor';
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { LocalForm, Control } from "react-redux-form";

class DoctorAvailability extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values, date) {
        // alert(JSON.stringify(values)+ " " + date + " " + localStorage.getItem("userId"));
        var toCompare = new Date().toLocaleDateString();
        var existing = this.props.availabilities.filter(a => a.idDoctor == localStorage.getItem("userId") && a.date == date);
        if (!values.from || !values.to) {
            return;
        }
        if (new Date(toCompare+" "+values.from) >= new Date(toCompare+" "+values.to)) {
            return;
        }
        if (existing.length == 0) {
            this.props.addAvailability(localStorage.getItem("userId"), date, values.from, values.to);
            return;
        } else {
            for(var i=0; i<existing.length; ++i) {
                if (new Date(toCompare + " " + values.from) < new Date(toCompare + " " + existing[i].startTime) && new Date(toCompare + " " + values.to) > new Date(toCompare + " " + existing[i].startTime)) {
                    return;
                }
                else if (new Date(toCompare + " " + values.from) < new Date(toCompare + " " + existing[i].endTime) && new Date(toCompare + " " + values.to) > new Date(toCompare + " " + existing[i].endTime)) {
                    return;
                }
                else if (new Date(toCompare + " " + values.from) >= new Date(toCompare + " " + existing[i].startTime) && new Date(toCompare + " " + values.to) <= new Date(toCompare + " " + existing[i].endTime)) {
                    return;
                }
            }
        }
        this.props.addAvailability(localStorage.getItem("userId"), date, values.from, values.to);
    }

    delete(id) {
        this.props.deleteAvailability(id);
    }

    render() {
        const dates = [];
        var tmpDate = new Date();
        var i = 0;
        while (i<4) {
            tmpDate.setDate(tmpDate.getDate()+1);
            if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
                i=i+1;
            }
        }
        
        i=0;
        while (i<4) {
            tmpDate.setDate(tmpDate.getDate()+1);
            if (tmpDate.getDay()!=0 && tmpDate.getDay()!=6) {
                dates.push(tmpDate.toLocaleDateString());
                i=i+1;
            }
        }

        const startTimes = [<option></option>].concat(this.props.timeslots.map(t => {
            return (
                <option>
                    {t.start}
                </option>
            )
        }));

        const endTimes = [<option></option>].concat(this.props.timeslots.map(t => {
            return (
                <option>
                    {t.end}
                </option>
            )
        }))

        const AvailableByDate = dates.map(date => {
            const availabilities = this.props.availabilities.filter(a => a.idDoctor == localStorage.getItem("userId") && a.date == date);
            const showAvailabilities = availabilities.map(a => {
                return (
                    <div className="row mb-1">
                        <div className="col-2">From:</div>
                        <div className="col-2">{a.startTime}</div>
                        <div className="col-2">To:</div>
                        <div className="col-2">{a.endTime}</div>
                        <div className="col-4">
                            <div className="btn btn-primary" onClick={() => this.delete(a._id)}>Delete</div>
                        </div>
                    </div>
                );
            });

            return (
                <div className="row">
                    <h4 className="col-12 text-left">{date}</h4>
                    <div className="col-12">
                        <div className="container">
                            {showAvailabilities}
                            <LocalForm onSubmit={(values) => this.handleSubmit(values, date)}>
                                <Row className="form-group">
                                    <Label htmlfor="from" sm={2}>From:</Label>
                                    <Col sm={2}>
                                        <Control.select model=".from" name="from" className="form-control">
                                            {startTimes}
                                        </Control.select>
                                    </Col>
                                    <Label htmlfor="to" sm={2}>To:</Label>
                                    <Col sm={2}>
                                        <Control.select model=".to" name="to" className="form-control">
                                            {endTimes}
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Button className="mb-5 offset-md-8" sm={4} value="submit" type="submit" color="primary">Add</Button>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            );
        })

        return (
            <div>
                <HeaderDoctor />
                <div className="container">
                    {AvailableByDate}
                </div>
            </div>
        )
    }
}

export default DoctorAvailability;