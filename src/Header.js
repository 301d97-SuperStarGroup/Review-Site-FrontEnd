

import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Game Listings</Navbar.Brand>
        <NavItem><Link to="/games" className="nav-link">Games</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
        {/* <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem> */}

      </Navbar>
    );
  }
}

export default Header;
