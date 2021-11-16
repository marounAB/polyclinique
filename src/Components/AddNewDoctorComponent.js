import React, { Component } from "react";
import HeaderDoctor from "./HeaderDoctor";
import { Form, FormGroup, Label, Input, Col, Button, Container } from "reactstrap";

class addDoctor extends Component {
    constructor(props) {
        super(props);

        this.state={
            name: "",
            surname: "",
            email: "",
            password: "",
            speciality: "",
            price: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {   
        if (this.props.doctors.filter(doctor => doctor.email == this.state.email).length == 0
        && this.props.patientEmails.filter(e => e==this.state.email).length ==0) {
            console.log('Current State is: ' + JSON.stringify(this.state));
            alert('Current State is: ' + JSON.stringify(this.state));
        } else {
            alert("email already taken choose another");
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

    render() {
        return (
            <div>
                <HeaderDoctor />
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <Container>
                                <Form onSubmit={this.handleSubmit}>
                                    <h3 className="mb-5">Add Doctor</h3>
                                    <FormGroup row>
                                        <Label htmlfor="name" md={2}>First Name</Label>
                                        <Col md={10}>
                                            <Input type="text" value={this.state.name}  onChange={this.handleInputChange} name="name" className="form-control" placeholder="Enter First Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlfor="surname" md={2}>Last Name</Label>
                                        <Col md={10}>
                                            <Input type="text" value={this.state.surname}  onChange={this.handleInputChange} name="surname" className="form-control" placeholder="Enter Last Name" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlfor="email" md={2}>Email</Label>
                                        <Col md={10}>
                                            <Input type="email" value={this.state.email}  onChange={this.handleInputChange} name="email" className="form-control" placeholder="Enter Email" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlfor="password" md={2}>Password</Label>
                                        <Col md={10}>
                                            <Input type="password" value={this.state.password}  onChange={this.handleInputChange} name="password" className="form-control" placeholder="Enter Password" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlfor="speciality" md={2}>Speciality</Label>
                                        <Col md={10}>
                                            <Input type="text" value={this.state.speciality}  onChange={this.handleInputChange} name="speciality" className="form-control" placeholder="Enter Speciality" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label htmlfor="price" md={2}>Checkup Price (in $)</Label>
                                        <Col md={10}>
                                            <Input type="number" min="50.00" max="100.00" value={this.state.price}  onChange={this.handleInputChange} name="price" className="form-control" placeholder="Enter Checkup Price" />
                                        </Col>
                                    </FormGroup>
                                    <Button className="mt-3" type="submit" color="primary">Submit</Button>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addDoctor;