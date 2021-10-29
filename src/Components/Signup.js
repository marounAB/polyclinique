import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { useHistory } from "react-router-dom";


class Signup extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            surname: '',
            email: '',
            password: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleSubmit(event) {   

         /*    console.log('Current State is: ' + JSON.stringify(this.state));
             alert('Current State is: ' + JSON.stringify(this.state));*/
             

            this.props.history.push("/medicalfile");
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
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <h3>Sign up</h3>
                        <FormGroup row>
                            <Label htmlfor="name" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input htmlfor="name" type="text" value={this.state.name}  onChange={this.handleInputChange} name="name" className="form-control" placeholder="Enter First Name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input htmlfor="surname" type="text" value={this.state.surname}  onChange={this.handleInputChange} name="surname" className="form-control" placeholder="Enter Last Name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlfor="email" md={2}>Email Address</Label>
                            <Col md={10}>
                                <Input htmlfor="email" type="email" value={this.state.email}  onChange={this.handleInputChange} name="email" className="form-control" placeholder="Enter Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Password</Label>
                            <Col md={10}>
                                <Input htmlfor="password" type="password" value={this.state.password}  onChange={this.handleInputChange} name="password" className="form-control" placeholder="Enter Password" />
                            </Col>
                        </FormGroup>
                        <Button type="submit" color="primary">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}


export default Signup;