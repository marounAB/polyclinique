import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { Switch, Route, Redirect, withRouter, BrowserRouter } from 'react-router-dom';


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
