import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { useHistory } from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            Email: '',
            Password: '',
            users: [{Email:'cynthiaobei@gmail.com', Password: '123'}]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleSubmit(event) {   
        for(var i=0;i<this.state.users.length;i++){
            if(this.state.Email===this.state.users[i].Email){
                if(this.state.Password===this.state.users[i].Password){
                    console.log('Current State is: ' + JSON.stringify(this.state));
                    alert('Current State is: ' + JSON.stringify(this.state));
                    this.props.history.push("/home");
                }
            }
            event.preventDefault();
        }
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
                        <h3>Login</h3>
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


export default Login;