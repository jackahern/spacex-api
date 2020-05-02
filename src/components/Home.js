import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import banner from "../spacex-logo.png";
import launch from '../launch.jpg';
import rocket from '../rocket2.jpg';
import roadster from '../roadster.png';
import '../home.css';

class Home extends Component {
  render() {
    return (
      <div className="space-theme">
        <div style={{ 'marginTop': '-115px' }}>
          <img src={banner} className="banner-pic" alt="SpaceX Logo" />
        </div>
        <div className="content-width">
          <Container fluid>
            <Row>
                <Col>
                  <Link to="/Launches/upcoming">
                    <Card>
                      {/*<Link to={`/Launches/${movie._id}`}>*/}
                        <Card.Img variant="top" src={launch} alt="Launch image" />
                      {/*</Link>*/}
                      <Card.Body>
                        <Card.Title>Launches</Card.Title>
                        <Card.Text>
                          See upcoming and past SpaceX launches
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              <Col>
                <Link to="/Rockets">
                  <Card>
                    <Card.Img variant="top" src={rocket} alt="Rocket image" />
                    <Card.Body>
                      <Card.Title>Rockets</Card.Title>
                      <Card.Text>
                        See all the rockets SpaceX has used and is using still
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Card>
                  {/*<Link to={`/Launches/${movie._id}`}>*/}
                  <Card.Img variant="top" src={roadster} alt="Roadster image" />
                  {/*</Link>*/}
                  <Card.Body>
                    <Card.Title>Roadster</Card.Title>
                    <Card.Text>
                      See the information still being collected by the spaceX roadster
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Home;