import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class HeaderDoctor extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/homedoctor"><img id="logo" src='assets/images/logo.jpg' width="150" alt='Polyclinic' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/homedoctor'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/doctorinfo'><span className="fa fa-plus fa-lg"></span>Personnal informormation</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/homedoctor'><span className="fa fa-list fa-lg"></span>List of Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/homedoctor'><span className="fa fa-list fa-lg"></span>Appointments</NavLink>
                            </NavItem>
                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Polyclinic's Doctors Values</h1>
                                <p></p>
                            </div>We put the needs of our patients first; treat all patients, visitors and one another with compassion and respect; work as a team to provide quality care and services to patients and customers; and contribute to ongoing improvement and excellence in everything we do.
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default HeaderDoctor;