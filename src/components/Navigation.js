import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll"
      data-bs-toggle="collapse" data-bs-target="#navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink eventKey="2" as={Link} to="/products">Products</NavLink>
          <NavLink eventKey="3" as={Link} to="/registration">RegistrationPage</NavLink>
          <NavLink eventKey="4" as={Link} to="/login">LoginPage</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <div className='nav'>
    //     <Link to="/"> Home</Link>
    //     <Link to="/contact"> Contact</Link>
    //     <Link to="/About"> About</Link>
    // </div>
  )
}
