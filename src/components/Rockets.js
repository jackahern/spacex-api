import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {getRockets} from "../actions";
import {connect} from "react-redux";
import { ListGroup, Card, Tabs, Tab, ListGroupItem } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';
import '../rockets.css';

class Rockets extends Component {
  componentDidMount() {
    this.props.getRockets();
  }
  render() {
    let rockets = this.props.rockets || {};

    console.log(rockets)
    return (
      <div id="rockets">
        <h1 style={{ marginBottom: '40px', marginTop: '40px', color: 'white', textAlign: 'center' }}>SpaceX Rockets</h1>
        {rockets.map((rocket) => (
          <Card>
            <Card.Body>
              <Card.Title>{rocket.rocket_name}</Card.Title>
              <Card.Text>
                {rocket.description}.. <Card.Link href={`${rocket.wikipedia}`} target="_blank">Wikipedia</Card.Link>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cost per launch: ${rocket.cost_per_launch}</ListGroupItem>
              <ListGroupItem>Location: {rocket.country}</ListGroupItem>
              <ListGroupItem>Height: {rocket.height.feet}ft {rocket.height.meters}m</ListGroupItem>
              <ListGroupItem>Diameter: {rocket.diameter.meters}m {rocket.diameter.feet}ft</ListGroupItem>
              <ListGroupItem>Mass: {rocket.mass.kg}kg {rocket.mass.lb}lb</ListGroupItem>
              <ListGroupItem>Engines: {rocket.engines.number}</ListGroupItem>
            </ListGroup>
            <div style={{ margin: 'auto' }}>
              <Tabs defaultActiveKey="payload" id="uncontrolled-tab-example">
                <Tab eventKey="payload" title="Payload weights">
                  <ListGroup className="list-group-flush">
                    {rocket.payload_weights.map((payload) => (
                      <ListGroupItem>Payload: {payload.name} ({payload.id}) - {payload.kg}kg {payload.lb}lb</ListGroupItem>
                      )
                    )}
                  </ListGroup>
                </Tab>
                <Tab eventKey="first-launch-results" title="First launch results">
                  <ListGroup className="list-group-flush list-group-rockets">
                    <ListGroupItem>First flight: {rocket.first_flight}</ListGroupItem>
                    <ListGroupItem>Engines: {rocket.first_stage.engines}</ListGroupItem>
                    <ListGroupItem>Burn time (seconds): {rocket.first_stage.burn_time_sec}</ListGroupItem>
                    <ListGroupItem>Fuel (tonnes): {rocket.first_stage.fuel_amount_tons}</ListGroupItem>
                    <ListGroupItem>Thrust (sea level): {rocket.first_stage.thrust_sea_level.kN}kN {rocket.first_stage.thrust_sea_level.lbf}lbf</ListGroupItem>
                    <ListGroupItem>Thrust (vacuum): {rocket.first_stage.thrust_vacuum.kN}kN {rocket.first_stage.thrust_vacuum.lbf}lbf</ListGroupItem>
                  </ListGroup>
                </Tab>
                <Tab eventKey="second-launch-results" title="Second launch results">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Engines: {rocket.second_stage.engines}</ListGroupItem>
                    <ListGroupItem>Burn time (seconds): {rocket.second_stage.burn_time_sec}</ListGroupItem>
                    <ListGroupItem>Fuel (tonnes): {rocket.second_stage.fuel_amount_tons}</ListGroupItem>
                    <ListGroupItem>Thrust: {rocket.second_stage.thrust.kN}kN {rocket.second_stage.thrust.lbf}lbf</ListGroupItem>
                  </ListGroup>
                </Tab>
              </Tabs>
            </div>
            <Card.Body>
            </Card.Body>
          </Card>
          )
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rockets: state.rockets_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getRockets}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Rockets);