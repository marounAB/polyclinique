
import React, { Component } from 'react';
import HeaderDoctor from './HeaderDoctor';
import {  FormGroup, Label, Col } from 'reactstrap';


class Infopatient extends Component {

    constructor(props){
        super(props);

 
    

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

   

  

    handleSubmit(event) {   

        
            this.props.history.push("/homedoctor");
       
            event.preventDefault();
        }
    

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    
    componentDidMount() {
        alert(JSON.stringify(this.props.patients))
    }



    render(){
       const listApps = this.props.appointments.filter(app =>app.description !== "empty" && app.idPatient===this.props.patient._id && app.idDoctor===localStorage.getItem("userId")).sort((a, b) => a.date - b.date).map(app => {
            const time = this.props.timeslots.filter(t => t._id === app.idTimeSlot)[0];
            const patient = this.props.patient;

            return (
                <div className="col-12 app mb-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h5>{patient.name} {patient.surname}</h5>
                            <div>
                                date: {app.date} <br/>
                                time: {time.start} - {time.end}
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <textarea readOnly value={app.description} />
                    </div>
                    </div>
                </div>
                </div>
                    
                    )
                });
        
        const profession = this.props.professions.filter(p => p._id === this.props.patient.idProfession)[0].description;

        return (   
            <div>
                <HeaderDoctor />
                <h1  class="text-center">{this.props.patient.name} {this.props.patient.surname}</h1>
                <div className="container" Style="padding-top: 60px; marg 60px; padding-left: 75px;">
                    <h3>Personnal Information</h3>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                    <FormGroup row>
                        <Label htmlfor="email" md={3}>Email</Label>
                        <Col md={9}>
                            <textarea  readonly Style="width: 200px; text-align:center" value={this.props.patient.email}></textarea>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="phonenumber" md={3}>Phone Number</Label>
                        <Col md={9}>
                            <textarea readonly Style="width: 200px; text-align:center; " value={this.props.patient.phonenumber}></textarea>
                         </Col>
                    </FormGroup>
                    </div>

                    <div className="col-12 col-md-6">
                    <FormGroup row>
                        <Label htmlfor="profession" md={3}>Profession</Label>
                        <Col md={9}>
                            <textarea readonly Style="width: 200px; text-align:center" value={profession}></textarea>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="dateofbirth" md={3}>Date of Birth</Label>
                        <Col md={9}>
                            <textarea readonly Style="width: 200px; text-align:center; " value={this.props.patient.dateofbirth}></textarea>
                        </Col>
                    </FormGroup>
                    </div>
                </div>
                

                <div className="row row-content">
                    <h3>Previous Appointments</h3>
                    {listApps}
                </div>
            
             </div>       

            </div>
        )
    }
  }

  export default Infopatient;
