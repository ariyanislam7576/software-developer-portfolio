import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
      <Navbar bg="white" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">Arman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <HashLink className='mx-3 text-dark text-decoration-none' to="/#home">Home</HashLink>
                            <HashLink className='mx-3 text-dark text-decoration-none' to="/#about">About</HashLink>
                            <HashLink className='mx-3 text-dark text-decoration-none' to="/#projects">Projects</HashLink>
                            <HashLink className='mx-3 text-dark text-decoration-none' to="/blog">Blog</HashLink>
                            <HashLink className='mx-3 text-dark text-decoration-none' to="/#contact">Contact</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;