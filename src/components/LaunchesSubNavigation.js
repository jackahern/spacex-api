import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import '../navigation.css';

class LaunchesSubNavigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center'}}>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/Launches/all">All Launches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Launches/latest">Latest Launch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Launches/upcoming">Upcoming Launches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Launches/past">Past Launches</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default LaunchesSubNavigation;