import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {getLaunches} from '../actions';
import {connect} from 'react-redux';
import LaunchesSubNavigation from "./LaunchesSubNavigation";
import { ListGroup, Card, Button } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';

class Launches extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: this.props.match.params.type };
  }
  componentDidMount() {
    this.props.getLaunches(this.props.match.params.type);
    console.log(this.props.match.params.type)
  }
  componentDidUpdate() {
    if (this.state.filter !== this.props.match.params.type) {
      this.props.getLaunches(this.props.match.params.type);
      this.setState({ filter : this.props.match.params.type})
    }
  }
  render() {
    console.log(this.props.launches)
    console.log(this.state.filter)

    let launches = this.props.launches || {};
    let launchLinks = this.props.launches.links || {};
    let launchSite = this.props.launches.launch_site || {};
    let launchRocket = this.props.launches.rocket || {};
    return (
      <div>
        <LaunchesSubNavigation/>
        <div className="launch-body">
          {/* If the type is 'latest', change the appearance of the page to work for just one entry */}
          {(() => {
            if (this.state.filter === 'latest') {
              return (
                <div style={{ display: 'block', textAlign: 'center' }}>
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
          })()}
          {/* If the type is upcoming, it does not need pagination so make it show differently, in a list still though */}
          {(() => {
            if (this.state.filter === 'upcoming') {
              return (
                <div style={{ display: 'block', textAlign: 'center' }}>
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
          })()}
          {/* If the type is upcoming, it does not need pagination so make it show differently, in a list still though */}
          {(() => {
            if (this.state.filter === 'past') {
              return (
                <div style={{ display: 'block', textAlign: 'center' }}>
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
          })()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launches_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLaunches}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Launches);