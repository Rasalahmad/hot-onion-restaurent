import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png';
import './Header.css';

const Header = () => {
  return (
    <>
     <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img className = 'logo' src={logo} alt="" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href=""><i class="fas fa-cart-plus"></i></Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign up</Nav.Link>
          </Nav>
          <NavLink to = '/food'>Details</NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;