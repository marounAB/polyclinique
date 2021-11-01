import React, { Component } from 'react';
import { useState } from 'react';
import { getDefaultNormalizer } from '@testing-library/dom';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem,
Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';

//import { useHistory } from 'react-router-dom';


function SearchBar(props){
    const  [searchTerm, setSearchTerm] = useState("");
     
    return(
        <div className="container">
            <input type="text" Style="width: 300px;"
            placeholder="Search for patient"
            onChange={(event) => {
                setSearchTerm(event.target.value);
            }}/>

            <div className="result"  Style="height: 70px; width: 400px; overflow:hidden; overflow-y:auto; padding-top:20px;">
                        {props.patients.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }).map((val,key) => {
                            return (
                                <div className="container">
                                    <div className="row">
                                <Link to={ `/infopatient/${val.id}` } type="click" >
                                    <div className="col-12 APatient">
                                        {val.name} {val.surname}
                                    </div>
                                    <hr />
                                </Link>
                                    </div>
                                </div>
                                );
                        })}
            </div>
        </div>
    )
    
}

export default SearchBar;