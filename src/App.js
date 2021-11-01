import logo from './logo.svg';
import './App.css';
import Main from './Components/MainComponent';
import { Switch, Route, Redirect, withRouter, BrowserRouter, Link } from 'react-router-dom';
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
