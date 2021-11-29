import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class ListApps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: "empty"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        alert(this.state.description);
        this.props.addDescription(this.props.app._id, this.props.patient._id, localStorage.getItem("userId"), this.props.time._id , this.props.app.date ,this.state.description);
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
            <div className="col-12 app mb-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h5>{this.props.patient.name} {this.props.patient.surname}</h5>
                            <div>
                                date: {this.props.app.date} <br/>
                                time: {this.props.time.start} - {this.props.time.end}
                            </div>
                        </div>
                        <hr Style="width: 90%" />
                        <div className="col-12">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label
                                    for="exampleText"
                                    sm={2}
                                    >
                                    Text Area
                                    </Label>
                                    <Col sm={10}>
                                    <Input
                                        id="exampleText"
                                        name="description"
                                        type="textarea"
                                        value={this.state.name}  
                                        onChange={this.handleInputChange}
                                    />
                                    </Col>
                                </FormGroup>
                                <Button className="offset-md-10 mt-1 mb-3" type="submit" color="primary">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListApps;