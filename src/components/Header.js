import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'gatsby'


const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Gatsy-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/"><b className="text-dark">Home</b></Nav.Link>
            <Nav.Link as={Link} to="/about"><b className="text-dark">About</b></Nav.Link>
            <Nav.Link as={Link} to="/contact"><b className="text-dark">Contact Us</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>

  )
}

export default Header

