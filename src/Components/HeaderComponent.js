import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
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
                        <NavbarBrand className="mr-auto" href="/home"><img id="logo" src='https://drive.google.com/thumbnail?id=1hqb4oXA38zLLmb4I-fg9xVEyiJaSeWX_' width="150" alt='Polyclinic' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/doctorsList'><span className="fa fa-plus fa-lg"></span> Take an Appointment</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/listClientAppointments'><span className="fa fa-list fa-lg"></span> Your Appointments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/listClientDescriptions'><span className="fa fa-list fa-lg"></span> Your Past Checkups</NavLink>
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
                                <h1>Polyclinic</h1>
                                <p>I swear to fulfill, to the best of my ability and judgment, this covenant: I will respect the hard-won scientific gains of those physicians in whose steps I walk, and gladly share such knowledge as is mine with those who are to follow.  ~Hippocratic oath</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;