import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { useHistory } from "react-router-dom";


class FichierMedical extends Component{
    constructor(props){
        super(props);

        this.state = {
            Firstname: '',
            Lastname: '',
            DateofBirth: '',
            Address: '',
            PhoneNumber: '',
            Email: '',
            Profession: '',
            Activities: '',
            MedicalHistory: '',
            Insurance: '',
            DoctorFirstName:'',
            DoctorLastname: '',
            DoctorEmail: '',
            DoctorSpeciality: '',
            MedicalDiagnosis: '',
            DiagnosisDescription: '',
            MedicalPrescription: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

  

    handleSubmit(event) {   

        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        
            this.props.history.push("/home");
       
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
        <div className="container" Style="padding-top: 40px;">
            <h3>Personnal Information</h3>
        <div className="row row-content">
            <div className="col-12 col-md-6">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label htmlfor="Firstname" md={2}>Firstname</Label>
                        <Col md={10}>
                            <Input type="Firstname" value={this.state.Firstname}  onChange={this.handleInputChange} name="Firstname" className="form-control" placeholder="Enter Firstname" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2}>Lastname</Label>
                        <Col md={10}>
                            <Input htmlfor="Lastname" type="Lastname" value={this.state.Lastname}  onChange={this.handleInputChange} name="Lastname" className="form-control" placeholder="Enter Lastname" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2}>Date of Birth</Label>
                        <Col md={10}>
                            <Input htmlfor="DateofBirth" type="DateofBirth" value={this.state.DateofBirth}  onChange={this.handleInputChange} name="DateofBirth" className="form-control" placeholder="Enter Date of Birth" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label md={2}>Address</Label>
                        <Col md={10}>
                            <Input htmlfor="Address" type="Address" value={this.state.Address}  onChange={this.handleInputChange} name="Address" className="form-control" placeholder="Enter Address" />
                        </Col>
                    </FormGroup>
                    </Form>
                    </div>

                    <div className="col-12 col-md-6">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label md={2}>Phone Number</Label>
                        <Col md={10}>
                            <Input htmlfor="PhoneNumber" type="PhoneNumber" value={this.state.PhoneNumber}  onChange={this.handleInputChange} name="PhoneNumber" className="form-control" placeholder="Enter Phone Number" />
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label htmlfor="email" md={2}>Email address</Label>
                        <Col md={10}>
                            <Input type="email" value={this.state.Email}  onChange={this.handleInputChange} name="Email" className="form-control" placeholder="Enter email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="Profession" md={2}>Profession</Label>
                        <Col md={10}>
                            <Input type="Profession" value={this.state.Profession}  onChange={this.handleInputChange} name="Profession" className="form-control" placeholder="Enter Profession" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label htmlfor="Activities" md={2}>Activities</Label>
                        <Col md={10}>
                            <Input type="Activities" value={this.state.Activities}  onChange={this.handleInputChange} name="Activities" className="form-control" placeholder="Enter Activities" />
                        </Col>
                    </FormGroup>
                    </Form>
                    </div>   
                    </div>
                </div>
                   
        <div className="container" Style="padding-top: 40px;">
            <h3>General Medical History</h3>
        <div className="row row-content" >
            <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
            <Label htmlfor="MedicalHistory" >Write your medical antecedents</Label>
                <textarea type="MedicalHistory" Style="height:300px; width:900px;" value={this.stateMedicalHistory}  onChange={this.handleInputChange} name="MedicalHistory" className="form-control" />
                    </FormGroup>
                    </Form>
                </div>
        </div>
        </div>

        <div className="container" Style="padding-top: 40px; height:300px; ">
            <h3>Insurance</h3>
        <div className="row row-content" >
            <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
            <Input type="checkbox" class="form-check-input" id="CheckInsurance"></Input>
            <Label className="form-check-label" htmlfor="Insurance" >Do you have medical insurance?</Label>
            </FormGroup>
            <FormGroup row>
                <Label md={4}>Insurance Name</Label>
                <Col md={8}>
                     <Input htmlfor="Insurance" type="Insurance" value={this.state.Insurance}  onChange={this.handleInputChange} name="Insurance" className="form-control" placeholder="Enter Insurance Name" />
                </Col>
                </FormGroup>
                </Form>
            </div>
        </div>
        </div>

        <div className="container" Style="padding-top: 40px;">
            <h3>Doctor's Note</h3>
        <div className="row row-content" Style="height: 130px;" >
            <div className="col-12 col-md-9">
                
                    <h5>Doctor's information</h5>
                <div className="row row-content">
                    <div className="col-12 col-md-6"> 
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                    <Label htmlfor="FirstName" md={4}>FirstName</Label>
                        <Col md={8}>
                            <Input type="DoctorFirstName" value={this.state.DoctorFirstName}  onChange={this.handleInputChange} name="DoctorFirstName" className="form-control" placeholder="Enter Doctor's FirstName" />
                        </Col>
                    </FormGroup>
                    

                    <FormGroup row>
                    <Label htmlfor="LastName" md={4}>LastName</Label>
                        <Col md={8}>
                            <Input htmlfor="DoctorLastname" type="DoctorLastname" value={this.state.DoctorLastname}  onChange={this.handleInputChange} name="DoctorLastname" className="form-control" placeholder="Enter Doctor's Lastname" />
                        </Col>
                    </FormGroup>
                    </Form>
                    </div>
                


                    <div className="col-12 col-md-6"> 
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                    <Label htmlfor="Email" md={4}>Email</Label>
                        <Col md={8}>
                            <Input type="DoctorEmail" value={this.state.DoctorEmail}  onChange={this.handleInputChange} name="DoctorEmail" className="form-control" placeholder="Enter Doctor's Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                    <Label htmlfor="Speciality" md={4}>Speciality</Label>
                        <Col md={8}>
                            <Input htmlfor="DoctorSpeciality" type="DoctorSpeciality" value={this.state.DoctorSpeciality}  onChange={this.handleInputChange} name="DoctorSpeciality" className="form-control" placeholder="Enter Doctor's Speciality" />
                        </Col>
                    </FormGroup>
                    </Form>
                    </div>
                 </div>  

                </div>
            </div>

            <div className="row row-content" >
                <div className="col-12 col-md-9">
                  <h5>Medical Diagnosis</h5>
                  <Form onSubmit={this.handleSubmit}>
                  <FormGroup row Style="padding-top:30px;">
                    <Label htmlfor="Medical Diagnosis" md={4}>Medical Diagnosis</Label>
                        <Col md={8}>
                            <Input type="MedicalDiagnosis" value={this.state.MedicalDiagnosis}  onChange={this.handleInputChange} name="MedicalDiagnosis" className="form-control" />
                        </Col>
                    </FormGroup>
                    </Form>
                </div>
            </div>

            <div className="row row-content" >
                <div className="col-12 col-md-9">
                  <h5>Description of the Diagnosis</h5>
                  <Form onSubmit={this.handleSubmit}>
                  <FormGroup row  Style="padding-top: 40px;">
                  <Label htmlfor="DiagnosisDescription" >Describe the diagnosis</Label>
                <textarea type="DiagnosisDescription" Style="height:300px; width:900px;" value={this.stateDiagnosisDescription}  onChange={this.handleInputChange} name="DiagnosisDescription" className="form-control" />
                    </FormGroup>
                    </Form>
                </div>  
            </div>

            <div className="row row-content" >
                <div className="col-12 col-md-9">
                  <h5>Medical Advise/Prescription</h5>
                  <Form onSubmit={this.handleSubmit}>
                  <FormGroup row  Style="padding-top: 40px;">
                  <Label htmlfor="Medical Advise/Prescription" >Medical Advise/Prescription</Label>
                <textarea type="Medical Advise/Prescription" Style="height:300px; width:900px;" value={this.stateMedicalPrescription}  onChange={this.handleInputChange} name="Medical Advise/Prescription" className="form-control" />
                    </FormGroup>
                    </Form>
                </div>  
            </div>


            
        </div>

        <Button type="submit" color="primary">Submit</Button>


        </div>
        


      )
}
}

export default FichierMedical;