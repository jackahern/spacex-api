import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Launches from './components/Launches';
import LaunchDetails from './components/LaunchDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Launches/:type?" component={Launches}/>
          <Route path="/LaunchDetails/:flight_number" component={LaunchDetails}/>
        </Switch>
      </div>
    )
  }
}

export default App;
