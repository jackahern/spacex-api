import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import LaunchesPast from './LaunchesPast';
import LaunchesUpcoming from "./LaunchesUpcoming";
import LaunchesLatest from "./LaunchesLatest";
import '../launches.css';

class Launches extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="latest" id="uncontrolled-tab-example">
          <Tab eventKey="latest" title="Latest Launch">
            <LaunchesLatest />
          </Tab>
          <Tab eventKey="upcoming" title="Upcoming Launches">
            <LaunchesUpcoming />
          </Tab>
          <Tab eventKey="past" title="Past Launches">
            <LaunchesPast />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default Launches;