import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand to="/home">Arman</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className='text-dark text-decoration-none mx-3' to="/phone">01879-237576</NavLink>
          <NavLink className='text-dark text-decoration-none mx-3' to="/features">nahidul.arman11@gmail.com</NavLink>
          <NavLink className='text-dark text-decoration-none mx-3' to="/pricing">Pricing</NavLink>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;