import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getPastLaunches} from '../actions';
import {connect} from 'react-redux';
import { ListGroup, Card, Button } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';

class LaunchesPast extends Component {
  componentDidMount() {
    this.props.getPastLaunches();
  }
  render() {

    let launches = this.props.launches || {};
    return (
      <div className="launch-body" style={{ display: 'block', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '50px' }}>Past SpaceX Launches</h1>
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
                  <ListGroup.Item>Status: <Button variant={launch.launch_success ? 'success' : 'danger'}>{launch.launch_success ? 'Success' : 'Failed'}</Button></ListGroup.Item>
                  <ListGroup.Item><Link to={`/LaunchDetails/${launch.flight_number}`}><Button variant="info">More details</Button></Link></ListGroup.Item>
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
    launches: state.launches_past_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPastLaunches}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchesPast);