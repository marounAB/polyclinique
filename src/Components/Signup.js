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
            Firstname: '',
            Lastname: '',
            Email: '',
            Password: ''

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
                            <Label htmlfor="email" md={2}>Email address</Label>
                            <Col md={10}>
                                <Input type="email" value={this.state.Email}  onChange={this.handleInputChange} name="Email" className="form-control" placeholder="Enter email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Password</Label>
                            <Col md={10}>
                                <Input htmlfor="password" type="password" value={this.state.Password}  onChange={this.handleInputChange} name="Password" className="form-control" placeholder="Enter password" />
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