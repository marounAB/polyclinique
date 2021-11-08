import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import HeaderDoctor from './HeaderDoctor';

class DoctorInfo extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
            <HeaderDoctor />
            <div className="container-fluid">
            <Form>
            <div className="container" Style="padding-top: 40px;">
                <h2>Personnal Information</h2>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <FormGroup row>
                            <Label htmlfor="Firstname" md={2}>Firstname</Label>
                            <Col md={10}>
                                <textarea readonly type="Firstname" value="Maroun"></textarea>
                            </Col>
                    </FormGroup>

                    <FormGroup row>
                            <Label htmlfor="Lastname" md={2}>Lastname</Label>
                            <Col md={10}>
                                <textarea readonly type="Lastname" value="Abou Boutros"></textarea>
                            </Col>
                    </FormGroup>

                    <FormGroup row>
                            <Label htmlfor="DateofBirth" md={2}>DateofBirth</Label>
                            <Col md={10}>
                                <textarea readonly type="DateofBirth" value="01/10/1985"></textarea>
                            </Col>
                    </FormGroup>
                </div>

                <div className="col-12 col-md-6">
                    <FormGroup row>
                            <Label htmlfor="Speciality" md={2}>Speciality</Label>
                            <Col md={10}>
                                <textarea readonly type="Speciality" value="Cardiologist"></textarea>
                            </Col>
                    </FormGroup>

                    <FormGroup row>
                            <Label htmlfor="Experience" md={2}>Experience</Label>
                            <Col md={10}>
                                <textarea readonly type="Experience" value="12 years"></textarea>
                            </Col>
                    </FormGroup>

                    <FormGroup row>
                            <Label htmlfor="Clinic Address" md={2}>Clinic Address</Label>
                            <Col md={10}>
                                <textarea readonly type="Clinic Address" value="Hotel Dieu Achrafieh"></textarea>
                            </Col>
                    </FormGroup>
                </div>

                </div>
                </div>

                </Form>
                </div>
                </div>
        )
    }

}

export default DoctorInfo;
