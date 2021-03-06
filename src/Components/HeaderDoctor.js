import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faBusinessTime, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderDoctor extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          show: "d-none"
        };
      }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    componentDidMount() {
        if (localStorage.getItem('admin') == 1) {
            this.setState({
                show: ""
            })
        }
    }
    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/homedoctor"><img id="logo" src='https://drive.google.com/thumbnail?id=1hqb4oXA38zLLmb4I-fg9xVEyiJaSeWX_' width="150" alt='Polyclinic' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/homedoctor'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/todayAppointments'><span className="fa fa-list fa-lg"></span> Today's Appointments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/doctorAvailability'><FontAwesomeIcon icon={faBusinessTime} /> Availabilities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={`nav-link ${this.state.show}`}  to='/addDoctor'><span className="fa fa-plus fa-lg"></span> Add new Doctor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/login'><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</NavLink>
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