import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Launches from './components/Launches';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Launches/:type?" component={Launches}/>
        </Switch>
      </div>
    )
  }
}

export default App;
