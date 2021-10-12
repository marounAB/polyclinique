import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <h1>HomePage</h1>
                <Footer/>     
            </div>
            )
        }
    }

export default HomePage;