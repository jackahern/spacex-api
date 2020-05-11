import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getLatestLaunch} from '../actions';
import {connect} from 'react-redux';
import { ListGroup, Card, Button } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';

class LaunchesLatest extends Component {
  componentDidMount() {
    this.props.getLatestLaunch();
  }
  render() {

    let launches = this.props.launches || {};
    let launchLinks = this.props.launches.links || {};
    let launchSite = this.props.launches.launch_site || {};
    let launchRocket = this.props.launches.rocket || {};
    return (
      <div className="launch-body" style={{ display: 'block', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '50px' }}>Latest SpaceX Launch</h1>
        <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
          <img className="mission-pic" src={`${launchLinks.mission_patch_small}`} alt="Launch mission logo"/>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>{launches.mission_name}</ListGroup.Item>
            <ListGroup.Item>Flight Number: {launches.flight_number}</ListGroup.Item>
            <ListGroup.Item>Launch Date: <Timestamp date={launches.launch_date_unix} /></ListGroup.Item>
            <ListGroup.Item>Launch Site: {launchSite.site_name_long}</ListGroup.Item>
            <ListGroup.Item>Rocket: {launchRocket.rocket_name}</ListGroup.Item>
            <ListGroup.Item>Status: <Button variant={launches.launch_success ? 'success' : 'danger'}>{launches.launch_success ? 'Success' : 'Failed'}</Button></ListGroup.Item>
            <ListGroup.Item><Link to={`/LaunchDetails/${launches.flight_number}`}><Button variant="info">More details</Button></Link></ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launches_latest_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLatestLaunch}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchesLatest);