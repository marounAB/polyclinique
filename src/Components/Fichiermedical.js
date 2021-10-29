import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { PATIENTS } from '../shared/patients';
import { DOCTORS } from '../shared/doctors';

class FichierMedical extends Component{
    constructor(props){
        super(props);

        this.state = {
            doctorEmails: DOCTORS.map(doctor => doctor.email),
            patients: PATIENTS,
            name: '',
            surname: '',
            dateOfBirth: new Date(),
            address: '',
            phoneNumber: '',
            email: '',
            profession: '',
            activities: '',
            medicalHistory: '',
            insurance: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleSubmit(event) {
        if (this.state.patients.filter(patient => patient.email == this.state.email).length == 0
        && this.state.doctorEmails.filter(e => e==this.state.email).length == 0) {
            alert(JSON.stringify(this.state));
            this.props.history.push("/home");
        } else {
            alert("email already taken");
        }
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

    render(){
      return(
        <div className="container-fluid">
        <Form onSubmit={this.handleSubmit}>
        <div className="container" Style="padding-top: 40px;">
            <h3>Personnal Information</h3>
        <div className="row row-content">
            <div className="col-12 col-md-6">
                <FormGroup row>
                        <Label htmlfor="name" md={2}>First Name</Label>
                        <Col md={10}>
                            <Input type="text" value={this.state.name}  onChange={this.handleInputChange} name="name" className="form-control" placeholder="Enter First Name" />
                        </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlfor="surname" md={2}>Last Name</Label>
                    <Col md={10}>
                        <Input type="text" value={this.state.surname}  onChange={this.handleInputChange} name="surname" className="form-control" placeholder="Enter Last Name" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlfor="dateOfBirth" md={2}>Date of Birth</Label>
                    <Col md={10}>
                        <Input type="date" value={this.state.dateOfBirth}  onChange={this.handleInputChange} name="dateOfBirth" className="form-control" placeholder="Enter Date of Birth" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label md={2}>Address</Label>
                    <Col md={10}>
                        <Input htmlfor="Address" type="text" value={this.state.address}  onChange={this.handleInputChange} name="address" className="form-control" placeholder="Enter Address" />
                    </Col>
                </FormGroup>
                    </div>

                    <div className="col-12 col-md-6">
                    <FormGroup row>
                        <Label md={2}>Phone Number</Label>
                        <Col md={10}>
                            <Input htmlfor="phoneNumber" type="tel" pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}" value={this.state.phoneNumber}  onChange={this.handleInputChange} name="phoneNumber" className="form-control" placeholder="Enter Phone Number" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="email" md={2}>Email address</Label>
                        <Col md={10}>
                            <Input type="email" value={this.state.email}  onChange={this.handleInputChange} name="email" className="form-control" placeholder="Enter Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="profession" md={2}>Profession</Label>
                        <Col md={10}>
                            <Input type="text" value={this.state.profession}  onChange={this.handleInputChange} name="profession" className="form-control" placeholder="Enter Profession" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="activities" md={2}>Activities</Label>
                        <Col md={10}>
                            <Input type="text" value={this.state.activities}  onChange={this.handleInputChange} name="activities" className="form-control" placeholder="Enter Activities" />
                        </Col>
                    </FormGroup>
                    
                    </div>   
                    </div>
                </div>

                  
        <div className="container" Style="padding-top: 40px;">
            <h3>General Medical History</h3>
        <div className="row row-content" >
            <div className="col-12 col-md-9">
            <FormGroup row>
            <Label htmlfor="medicalHistory" >Write your medical antecedents</Label>
                <textarea type="text" Style="height:300px; width:900px;" value={this.stateMedicalHistory}  onChange={this.handleInputChange} name="medicalHistory" className="form-control" />
                    </FormGroup>
                </div>
        </div>
        </div>

        <div className="container" Style="padding-top: 40px; height:300px; ">
            <h3>Insurance</h3>
        <div className="row row-content" >
            <div className="col-12 col-md-9">
            <FormGroup row>
            <Input type="checkbox" class="form-check-input" id="CheckInsurance"></Input>
            <Label className="form-check-label" htmlfor="Insurance" >Do you have medical insurance?</Label>
            </FormGroup>
            <FormGroup row>
                <Label md={4}>Insurance Name</Label>
                <Col md={8}>
                     <Input htmlfor="insurance" type="text" value={this.state.insurance}  onChange={this.handleInputChange} name="insurance" className="form-control" placeholder="Enter Insurance Name" />
                </Col>
                </FormGroup>
            </div>
        </div>
        </div>
        <Button type="submit" color="primary">Submit</Button>
        </Form>
        </div>
      );
}
}

export default FichierMedical;