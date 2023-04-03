import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Game Listings</Navbar.Brand>
        <NavItem><Link to="" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="" className="nav-link">About</Link></NavItem>
      </Navbar>

    );
  }
}

export default Header;
