import logo from './logo.svg';
import './App.css';
import Main from './Components/MainComponent';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;
