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
            Insurance: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

  

    handleSubmit(event) {   

        
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
        <Form onSubmit={this.handleSubmit}>
        <div className="container" Style="padding-top: 40px;">
            <h3>Personnal Information</h3>
        <div className="row row-content">
            <div className="col-12 col-md-6">
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
                    </div>

                    <div className="col-12 col-md-6">
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
                    
                    </div>   
                    </div>
                </div>

                  
        <div className="container" Style="padding-top: 40px;">
            <h3>General Medical History</h3>
        <div className="row row-content" >
            <div className="col-12 col-md-9">
            <FormGroup row>
            <Label htmlfor="MedicalHistory" >Write your medical antecedents</Label>
                <textarea type="MedicalHistory" Style="height:300px; width:900px;" value={this.stateMedicalHistory}  onChange={this.handleInputChange} name="MedicalHistory" className="form-control" />
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
                     <Input htmlfor="Insurance" type="Insurance" value={this.state.Insurance}  onChange={this.handleInputChange} name="Insurance" className="form-control" placeholder="Enter Insurance Name" />
                </Col>
                </FormGroup>
            </div>
        </div>
        </div>

        
            
      

        <Button type="submit" color="primary">Submit</Button>
        </Form>


        </div>
        


      )
}
}

export default FichierMedical;