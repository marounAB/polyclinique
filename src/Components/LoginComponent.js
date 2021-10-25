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
            users: [{id:1, Email:'cynthiaobei@gmail.com', Password: '123'}],
            doctors: [{id:1, Email:'maroun@gmail.com', Password: '321'}]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

  

    handleSubmit(event) {   
        for(var i=0;i<this.state.users.length;i++){
            if(this.state.Email===this.state.users[i].Email){
                if(this.state.Password===this.state.users[i].Password){

              

               //     console.log('Current State is: ' + JSON.stringify(this.state));
              //      alert('Current State is: ' + JSON.stringify(this.state));
                    localStorage.setItem('userId', this.state.users[i].id);

                    this.props.history.push("/home");
                }
            }
        }
        for(var j=0;j<this.state.doctors.length;j++){
            if(this.state.Email===this.state.doctors[j].Email){
                if(this.state.Password===this.state.doctors[j].Password){

                  //  console.log('Current State is: ' + JSON.stringify(this.state));
                  //  alert('Current State is: ' + JSON.stringify(this.state));
                    localStorage.setItem('userId', this.state.doctors[j].id);

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
                                <Input type="email" value={this.state.Email}  onChange={this.handleInputChange} name="Email" className="form-control" placeholder="Enter email" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={3}>Password</Label>
                            <Col md={8}>
                                <Input htmlfor="password" type="password" value={this.state.Password}  onChange={this.handleInputChange} name="Password" className="form-control" placeholder="Enter password" />
                            </Col>
                        </FormGroup>
                        
                        <Button type="submit" color="primary">Submit</Button>
                        <p className="Sign-up text-right">
                           <Link to="/Signup" Style="color:white;">Create account</Link>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}


export default Login;