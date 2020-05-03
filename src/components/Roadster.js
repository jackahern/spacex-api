import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {getRoadster} from "../actions";
import {connect} from "react-redux";
import { ListGroup, Card, Tabs, Tab, ListGroupItem } from "react-bootstrap";
import NumberFormat from 'react-number-format';
import Timestamp from 'react-timestamp';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../launches.css';
import '../rockets.css';
import '../roadster.css';
import RoadsterImg from '../roadster-in-space.png';

class Roadster extends Component {
  componentDidMount() {
    this.props.getRoadster();
  }
  render() {
    console.log(this.props.roadster)
    let roadster = this.props.roadster || {};
    return (
      <div id="roadster">
        <Card className="bg-dark text-white">
          <Card.Img src={RoadsterImg} alt="Roadster in space" />
          <Card.ImgOverlay style={{ textAlign: 'center' }}>
            <Card.Title style={{ textAlign: 'center' }}>Where is {roadster.name}?</Card.Title>
            <Card.Text>{roadster.details}</Card.Text>
            <Card.Text>Distance statistics in kilometres:</Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Distance from Earth:
                <NumberFormat value={roadster.earth_distance_km} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>km /
                <NumberFormat value={roadster.earth_distance_mi} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>mi
              </ListGroupItem>
              <ListGroupItem>Distance from Mars:
                <NumberFormat value={roadster.mars_distance_km} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>km /
                <NumberFormat value={roadster.mars_distance_mi} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>mi
              </ListGroupItem>
            </ListGroup>
            <Card.Text>Currently travelling at a speed of
              <NumberFormat value={roadster.speed_kph} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>kph /
              <NumberFormat value={roadster.speed_mph} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={" "}/>mph,
               Starman orbits the Sun every
              <NumberFormat value={roadster.period_days} displayType={'text'} decimalScale={2} prefix={" "}/> days.
            </Card.Text>
            <Card.Title>Summarised details</Card.Title>
            <ListGroup className="list-group-flush" style={{ width: '342px', margin: 'auto' }}>
              <ListGroupItem>
                <OverlayTrigger
                  key="apoapsis"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-apoapsis">
                      The point at which an orbiting object is farthest away from the body it is orbiting. This point is sometimes given a name that is specific to the body being orbited...
                      <a href="https://www.dictionary.com/browse/apoapsis" target="_blank">Dictionary</a>
                    </Tooltip>
                  }
                >
                  <Card.Text>Apoapsis:
                    <NumberFormat value={roadster.apoapsis_au} displayType={'text'} decimalScale={2} prefix={" "}/>AU
                  </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="eccentricity"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-eccentricity">
                      Deviation of a curve or orbit from circularity
                    </Tooltip>
                  }
                >
                <Card.Text>Eccentricity:
                  <NumberFormat value={roadster.eccentricity} displayType={'text'} decimalScale={2} prefix={" "}/>
                </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="inclination"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-inclination">
                      The angle between the orbital plane of a planet, comet, etc. and the ecliptic, or between the orbital plane of a satellite and the equatorial plane of its primary.
                    </Tooltip>
                  }
                >
                <Card.Text>Inclination:
                  <NumberFormat value={roadster.inclination} displayType={'text'} decimalScale={2} prefix={" "}/>
                </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="longitude"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-longitude">
                      The angular distance of a place east or west of the Greenwich meridian, or west of the standard meridian of a celestial object, usually expressed in degrees and minutes.
                    </Tooltip>
                  }
                >
                <Card.Text>Longitude:
                  <NumberFormat value={roadster.longitude} displayType={'text'} decimalScale={2} prefix={" "}/>
                </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="norad"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-norad">
                      A joint U.S.-Canadian air force command responsible for detecting aircraft and space vehicles deemed a threat to the continental airspace...
                      <a href="https://www.dictionary.com/browse/norad?s=t" target="_blank">Dictionary</a>
                    </Tooltip>
                  }
                >
                  <Card.Text>Norad ID: {roadster.norad_id}</Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="orbit-type"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-orbit-type">
                      A heliocentric orbit (also called circumsolar orbit) is an orbit around the barycenter of the Solar System, which is usually located within or very near the surface of the Sun...
                      <a href="https://en.wikipedia.org/wiki/Heliocentric_orbit" target="_blank">Wikipedia</a>
                    </Tooltip>
                  }
                >
                  <Card.Text>Orbit type: {roadster.orbit_type}</Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="orbit-time"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-orbit-time">
                       Days taken to orbit the Sun
                    </Tooltip>
                  }
                >
                  <Card.Text>Period days:
                    <NumberFormat value={roadster.period_days} displayType={'text'} decimalScale={2} prefix={" "}/>
                  </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="periapsis_arg"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-periapsis_arg">
                      The point at which an orbiting object is closest to the center of mass of the body it is orbiting...
                      <a href="https://www.dictionary.com/browse/periapsis?s=t" target="_blank">Dictionary</a>
                    </Tooltip>
                  }
                >
                <Card.Text>Periapsis (arg):
                  <NumberFormat value={roadster.periapsis_arg} displayType={'text'} decimalScale={2} prefix={" "}/>
                </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="periapsis_au"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-periapsis_au">
                      The point at which an orbiting object is closest to the center of mass of the body it is orbiting...
                      <a href="https://www.dictionary.com/browse/periapsis?s=t" target="_blank">Dictionary</a>
                    </Tooltip>
                  }
                >
                  <Card.Text>Periapsis (AU):
                    <NumberFormat value={roadster.periapsis_au} displayType={'text'} decimalScale={2} prefix={" "}/>
                  </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>
                <OverlayTrigger
                  key="semi-major-axis"
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-semi-major-axis">
                      Average distance to the Sun
                    </Tooltip>
                  }
                >
                <Card.Text>Semi major axis:
                  <NumberFormat value={roadster.semi_major_axis_au} displayType={'text'} decimalScale={2} prefix={" "}/>AU
                </Card.Text>
                </OverlayTrigger>{' '}
              </ListGroupItem>
              <ListGroupItem>Launch date: <Timestamp date={roadster.launch_date_unix} options={{ includeDay: true, twentyFourHour: true }}/></ListGroupItem>
              <ListGroupItem>Launch mass (kg): {roadster.launch_mass_kg}</ListGroupItem>
              <ListGroupItem>Launch mass (lbs): {roadster.launch_mass_lbs}</ListGroupItem>
            </ListGroup>
          </Card.ImgOverlay>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    roadster: state.roadster_reducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getRoadster}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Roadster);