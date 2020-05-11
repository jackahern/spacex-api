import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Launches from './components/Launches';
import LaunchesLatest from "./components/LaunchesLatest";
import LaunchesUpcoming from "./components/LaunchesUpcoming";
import LaunchesPast from "./components/LaunchesPast";
import LaunchDetails from './components/LaunchDetails';
import Rockets from './components/Rockets';
import Roadster from "./components/Roadster";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Launches/" component={Launches}/>
          <Route path="/Launches/Upcoming" component={LaunchesUpcoming}/>
          <Route path="/Launches/Past" component={LaunchesUpcoming}/>
          <Route path="/Launches/Latest" component={LaunchesLatest}/>
          <Route path="/LaunchDetails/:flight_number" component={LaunchDetails}/>
          <Route path="/Rockets/" component={Rockets}/>
          <Route path="/Roadster/" component={Roadster}/>
        </Switch>
      </div>
    )
  }
}

export default App;
