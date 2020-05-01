import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {getLaunch} from "../actions";
import {connect} from "react-redux";
import {Button, ListGroup} from "react-bootstrap";
import Timestamp from "react-timestamp";
import '../launches.css';

class LaunchDetails extends Component {
  componentDidMount() {
    this.props.getLaunch(this.props.match.params.flight_number);
  }

  render() {
    console.log(this.props.launch)
    let launch = this.props.launch || {};
    let rocket = this.props.launch.rocket || {};
    let links = this.props.launch.links || {};
    let site = this.props.launch.launch_site || {};
    return (
      <div className="launch-body">
        <div style={{ display: 'block', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '50px' }}>More information for {launch.mission_name}</h1>
          <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>{launch.mission_name}</ListGroup.Item>
              <ListGroup.Item>Flight Number: {launch.flight_number}</ListGroup.Item>
              <ListGroup.Item>Launch Date: <Timestamp date={launch.launch_date_unix} /></ListGroup.Item>
              <ListGroup.Item>Launch Site: {site.site_name_long}</ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>Rocket Info</ListGroup.Item>
              <ListGroup.Item>Rocket ID: {rocket.rocket_id}</ListGroup.Item>
              <ListGroup.Item>Rocket Name: {rocket.rocket_name}</ListGroup.Item>
              <ListGroup.Item>Rocket Type: {rocket.rocket_type}</ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>Details</ListGroup.Item>
              <ListGroup.Item className="details">{launch.details}</ListGroup.Item>
              <ListGroup.Item><a href={`${links.article_link}`} target="_blank">View Article</a></ListGroup.Item>
              <ListGroup.Item>Status: <Button variant={launch.launch_success ? 'success' : 'danger'}>{launch.launch_success ? 'Success' : 'Failed'}</Button></ListGroup.Item>
            </ListGroup>
          </div>
          <div>
            <img className="mission-pic" src={`${links.mission_patch_small}`} alt="Launch mission logo"/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    launch: state.launch_details_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLaunch}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchDetails);