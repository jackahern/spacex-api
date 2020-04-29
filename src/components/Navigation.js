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
              <NavLink tag={Link} to="/Launches">Launches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/UpcomingMovies">pending..</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Events">pending..</NavLink>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;