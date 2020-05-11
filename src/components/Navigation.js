import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import '../navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><NavLink exact to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <NavLink tag={Link} to="/Launches" activeClassName="active-nav">Launches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Rockets" activeClassName="active-nav">Rockets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Roadster" activeClassName="active-nav">Roadster</NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;