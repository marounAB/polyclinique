import { ThumbUpSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import HeaderDoctor from './HeaderDoctor';

class Infopatient extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

  

    handleSubmit(event) {   

        
            this.props.history.push("/homedoctor");
       
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
        return (   
            <div>
                <HeaderDoctor />
                <h1>{this.props.patient.id} {this.props.patient.name} {this.props.patient.surname}</h1>
            </div>
        )
    }
  }

  export default Infopatient;
