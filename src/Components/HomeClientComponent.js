import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ListServices from './ListServicesComponent';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import HomeCarousel from './HomeClientCarouselComponent';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <div class="container">
                    <div class="row">
                        <div class="col-10 offset-1 d-none d-md-block">
                            <HomeCarousel className="col-4 offset-4"/>
                        </div>
                    </div>
                    <div class="row PolyInfo align-items-center">
                        <div class="col-12 col-md-4">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6254241691677!2d35.52334821521046!3d33.87354308065499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17cea570a753%3A0x24ea488e278952c6!2sReacte%20Polyclinic!5e0!3m2!1sen!2slb!4v1634294634123!5m2!1sen!2slb" 
                                width="100%"
                                height="300px"   
                                allowfullscreen="" 
                                loading="lazy" />
                        </div>
                        <div class="col-12 col-md-8">
                            <h3>Welcome to PolyClinic</h3>
                            We Are the number one polyclnic in Lebanon, we provide our patients with excellent care and make them feel at home in our 
                            clinic. Our doctors are highly professional and compassionate, all leading in their own fields and coming from the best medical
                            schools around the globe. We also have the latest medical equipment to diagnose and treat different health problems and give our 
                            patients peace of mind during their treatment.
                        </div>
                    </div>
                    <ListServices />
                </div>
                <Footer />     
            </div>
            )
        }
    }

export default HomePage;