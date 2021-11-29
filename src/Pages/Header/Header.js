import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar bg="white" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">Arman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='mx-3 text-dark text-decoration-none' to="#home">Home</NavLink>
                            <NavLink className='mx-3 text-dark text-decoration-none' to="#about">About</NavLink>
                            <NavLink className='mx-3 text-dark text-decoration-none' to="#projects">Projects</NavLink>
                            <NavLink className='mx-3 text-dark text-decoration-none' to="#contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;