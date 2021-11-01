import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { DOCTORS } from '../shared/doctors';
import { PATIENTS } from '../shared/patients';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            users: PATIENTS,
            doctors: DOCTORS
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

  

    handleSubmit(event) {   
        for(var i=0;i<this.state.users.length;i++){
            if(this.state.email===this.state.users[i].email){
                if(this.state.password===this.state.users[i].password){

              

                //    console.log('Current State is: ' + JSON.stringify(this.state));
                //    alert('Current State is: ' + JSON.stringify(this.state));
                    localStorage.setItem('userId', this.state.users[i].id);

                    this.props.history.push("/home");
                }
            }
        }
        for(var j=0;j<this.state.doctors.length;j++){
            if(this.state.email===this.state.doctors[j].email){
                if(this.state.password===this.state.doctors[j].password){

                  //  console.log('Current State is: ' + JSON.stringify(this.state));
                  //  alert('Current State is: ' + JSON.stringify(this.state));
                    localStorage.setItem('userId', this.state.doctors[j].id);
                    localStorage.setItem('admin', this.state.doctors[j].admin);

                    this.props.history.push("/homedoctor");
                }
            }
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
        <div className="container"  Style="padding-top: 100px; padding-left: 50px; background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,207,173,1) 0%, rgba(0,212,255,1) 100%); height:700px; width: 700px">
            <div className="row row-content">
                <div className="col-12 col-md-9"  Style="padding-top: 50px; " >
                    <Form onSubmit={this.handleSubmit}>
                        <h3 Style="padding-bottom: 25px;">Login</h3>
                        <FormGroup row>
                            <Label htmlfor="email" md={3}>Email address</Label>
                            <Col md={8}>
                                <Input type="email" value={this.state.email}  onChange={this.handleInputChange} name="email" className="form-control" placeholder="Enter email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={3}>Password</Label>
                            <Col md={8}>
                                <Input htmlfor="password" type="password" value={this.state.password}  onChange={this.handleInputChange} name="password" className="form-control" placeholder="Enter password" />
                            </Col>
                        </FormGroup>
                        
                        <Button type="submit" color="primary">Submit</Button>
                        <p className="Sign-up text-right">
                           <Link to="/medicalfile" Style="color:white;">Create account</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}


export default Login;