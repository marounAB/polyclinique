import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Label, Input, Col, Container, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { withRouter } from 'react-router';


class Login extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };

  

    handleSubmit(values) {   
        for(var i=0;i<this.props.patients.length;i++){
            if(values.email===this.props.patients[i].email){
                if(values.password===this.props.patients[i].password){

              

                //    console.log('Current State is: ' + JSON.stringify(this.state));
                //    alert('Current State is: ' + JSON.stringify(values));
                    localStorage.setItem('userId', this.props.patients[i]._id);

                    this.props.history.push("/home");
                }
            }
        }
        for(var j=0;j<this.props.doctors.length;j++){
            if(values.email===this.props.doctors[j].email){
                if(values.password===this.props.doctors[j].password){

                  //  console.log('Current State is: ' + JSON.stringify(this.state));
                //    alert('Current State is: ' + JSON.stringify(values));
                    localStorage.setItem('userId', this.props.doctors[j]._id);
                    
                    if (this.props.doctors[j].admin == true) {
                        localStorage.setItem('admin', 1);
                    } else {
                        localStorage.setItem('admin', 0);
                    }

                    this.props.history.push("/homedoctor");
                }
            }
        }
        // alert(JSON.stringify(values));
        this.props.resetLoginForm();
    }
    
    render(){
        const required = (val) => val && val.length;
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        return(
        <div className="container"  Style="padding-top: 100px; padding-left: 50px; background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,207,173,1) 0%, rgba(0,212,255,1) 100%); height:700px; width: 700px">
            <div className="row row-content">
                <div className="col-12 col-md-9"  Style="padding-top: 50px; " >
                    <Form model="login" onSubmit={(values) => this.handleSubmit(values)}>
                        <h3 Style="padding-bottom: 25px;">Login</h3>
                        <Row className="form-group">
                            <Label htmlfor="email" sm={3}>Email address</Label>
                            <Col sm={8}>
                                <Control.text model=".email" id="email" name="email" className="form-control" placeholder="Enter email" validators={{required, validEmail}} />
                                <Errors className="text-danger" model=".email" show="touched" messages={{required: 'Required', validEmail: 'Invalid Email Address'}} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlfor="password" sm={3}>Password</Label>
                            <Col sm={8}>
                                <Control.password model=".password" id="password" name="password" className="form-control" placeholder="Enter password" validators={{required}}/>
                                <Errors className="text-danger" model=".email" show="touched" messages={{ required: 'Required', validPassword: 'Invalid Password'}}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col sm={2}>
                        <Button type="submit" color="primary">Submit</Button>
                        </Col>
                        </Row>
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


export default withRouter(Login);