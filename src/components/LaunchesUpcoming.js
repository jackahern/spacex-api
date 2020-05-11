import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getUpcomingLaunches} from '../actions';
import {connect} from 'react-redux';
import { ListGroup, Card, Button } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';

class LaunchesUpcoming extends Component {
  componentDidMount() {
    this.props.getUpcomingLaunches();
  }

  render() {
    let launches = this.props.launches || {};
    return (
      <div className="launch-body" style={{ display: 'block', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '50px' }}>Upcoming SpaceX Launches</h1>
        <div>
          {launches.map((launch) =>
            <Card>
              <div style={{ display: 'block' }}>
                <img className="mission-pic-in-card" src={`${launch.links.mission_patch_small}`} alt="There is no logo for this mission"/>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>{launch.mission_name}</ListGroup.Item>
                  <ListGroup.Item>Flight Number: {launch.flight_number}</ListGroup.Item>
                  <ListGroup.Item>Launch Date: <Timestamp date={launch.launch_date_unix} /></ListGroup.Item>
                  <ListGroup.Item>Launch Site: {launch.launch_site.site_name_long}</ListGroup.Item>
                  <ListGroup.Item>Rocket: {launch.rocket.rocket_name}</ListGroup.Item>
                </ListGroup>
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launches_upcoming_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getUpcomingLaunches}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchesUpcoming);