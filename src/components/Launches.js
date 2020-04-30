import React, { Component } from 'react';
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
    let launchLinks = this.props.launches.links || {}
    let launchSite = this.props.launches.launch_site || {}
    let launchRocket = this.props.launches.rocket || {}
    return (
      <div>
        <LaunchesSubNavigation/>
        <div className="launch-body">
          {/* If the booking has been completed successfully, show a button to go to the booking confirmation screen */}
          {(() => {
            if (this.state.filter === 'latest') {
              return (
                <div style={{ display: 'block', textAlign: 'center' }}>
                  <h1 style={{ marginBottom: '30px' }}>Latest SpaceX Launch</h1>
                  <div style={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
                    <img src={`${launchLinks.mission_patch_small}`} alt="Launch mission logo"/>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item style={{ fontWeight: '700', fontSize: '20px' }}>{launches.mission_name}</ListGroup.Item>
                        <ListGroup.Item>Flight Number: {launches.flight_number}</ListGroup.Item>
                        <ListGroup.Item>Launch Date: <Timestamp date={launches.launch_date_unix} /></ListGroup.Item>
                        <ListGroup.Item>Launch Site: {launchSite.site_name_long}</ListGroup.Item>
                        <ListGroup.Item>Rocket: {launchRocket.rocket_name}</ListGroup.Item>
                        <ListGroup.Item>Status: <Button variant={launches.launch_success ? 'success' : 'danger'}>{launches.launch_success ? 'Success' : 'Failed'}</Button></ListGroup.Item>
                      </ListGroup>
                    </Card>
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