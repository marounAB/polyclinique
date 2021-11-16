import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Button, Row,  FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { Control,Form,    Errors } from 'react-redux-form';

import { withRouter } from 'react-router';



class FichierMedical extends Component{
    constructor(props){
        super(props);

  /*      this.state = {
            doctorEmails: DOCTORS.map(doctor => doctor.email),
            patients: PATIENTS,
            
            address: '',
            firstname: '',
            lastname: '',
            dateOfBirth: '',
            email: '',
            phoneNumber: '',
          
            profession: '',
            activities: '',
            medicalHistory: '',
            insurance: ''
            
        }*/
        this.handleSubmit = this.handleSubmit.bind(this);
   //     this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleSubmit(values) {
        
            alert('Current State is: ' + JSON.stringify(values));
            

            this.props.history.push("/home");
         
    }
/*
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }*/

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isDate = (val) => /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/i.test(val);
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        const isNumber = (val) => !isNaN(Number(val));

      return(
        <div className="container-fluid">
        <Form model="user" onSubmit={(values) => this.handleSubmit(values)}>
                    
        <div className="container" Style="padding-top: 40px;">
            <h3>Sign up</h3>
        <div className="row row-content">
            <div className="col-12 col-md-6">
                <Row className="form-group"> 
                        <Label htmlfor="firstname" md={2}>First Name</Label>
                        <Col md={10}>
                        <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                        <Errors
                        className="text-danger"
                        model=".firstname"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                    />
                        </Col>
                </Row>

                <Row className="form-group">
                    <Label htmlfor="lastname" md={2}>Last Name</Label>
                    <Col md={10}>
                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                    <Errors
                        className="text-danger"
                        model=".lastname"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }}
                        />
                    </Col>
                </Row>

                <Row className="form-group">
                    <Label htmlfor="dateOfBirth" md={2}>Date of Birth</Label>
                    <Col md={10}>
                    <Control.text model=".dateOfBirth" id="dateOfBirth" name="dateOfBirth"
                    placeholder="YYYY-MM-DD" className="form-control"
                    validators={{
                        required, isDate}}
                        />
                    <Errors
                        className="text-danger"
                        model=".dateOfBirth"
                        show="touched"
                        messages={{
                            required: 'Required',
                            isDate : 'Should be in this format: YYYY-MM-DD'
                        }}
                        />
                    </Col>
                </Row>
                    </div>

                    <div className="col-12 col-md-6">
                    <Row className="form-group">
                        <Label md={2}>Phone Number</Label>
                        <Col md={10}>
                        <Control.text model=".phoneNumber" id="phoneNumber" name="phoneNumber"
                            placeholder="phoneNumber" className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                            }}
                                />
                        <Errors
                            className="text-danger"
                            model=".phoneNumber"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 numbers',
                                maxLength: 'Must be 15 numbers or less',
                                isNumber: 'Must be a number'
                            }}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlfor="email" md={2}>Email address</Label>
                        <Col md={10}>
                        <Control.text model=".email" id="email" name="email"
                            placeholder="Email"  className="form-control"
                            validators={{
                                required, validEmail
                            }}
                                />
                        <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                            />
                    </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlfor="profession" md={2}>Profession</Label>
                        <Col md={10}>
                        <Control.text model=".profession" id="profession" name="profession"
                            placeholder="Profession" className="form-control"
                            Validators={{
                                required
                            }}
                                />
                    <Errors
                    className="text-danger"
                    model=".profession"
                    show="touched"
                    messages={{
                        required: 'Required',
                    }}
                    />
                        </Col>
                    </Row>

             
            </div>
        </div>
        </div>
        <Button type="submit" color="primary">Submit</Button>
        </Form>
        </div>
      );
}
}




export default withRouter(FichierMedical);