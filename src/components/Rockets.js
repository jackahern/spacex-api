import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {getRockets} from "../actions";
import {connect} from "react-redux";
import { ListGroup, Card, Tabs, Tab, ListGroupItem } from "react-bootstrap";
import Timestamp from 'react-timestamp';
import '../launches.css';

class Rockets extends Component {
  componentDidMount() {
    this.props.getRockets();
  }
  render() {
    let rockets = this.props.rockets || {};

    console.log(rockets)
    return (
      <div>
        {rockets.map((rocket) => (
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{rocket.rocket_name}</Card.Title>
              <Card.Text>
                {rocket.description}
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
            <Tabs defaultActiveKey="payload" id="uncontrolled-tab-example">
              <Tab eventKey="payload" title="Payload weights">
                <ListGroup className="list-group-flush">
                  {rocket.payload_weights.map((payload) => (
                    <ListGroupItem>Payload: {payload.name} ({payload.id}) - {payload.kg} {payload.lb}</ListGroupItem>
                    )
                  )}
                </ListGroup>
              </Tab>
              <Tab eventKey="first-launch-results" title="First launch results">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cost per launch: ${rocket.cost_per_launch}</ListGroupItem>
                  <ListGroupItem>Location: {rocket.country}</ListGroupItem>
                  <ListGroupItem>Hddgg</ListGroupItem>
                </ListGroup>
              </Tab>
              <Tab eventKey="second-launch-results" title="Second launch results">
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cost per launch: ${rocket.cost_per_launch}</ListGroupItem>
                  <ListGroupItem>Location: {rocket.country}</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Tab>
            </Tabs>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
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