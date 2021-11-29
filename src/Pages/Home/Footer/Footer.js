import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='my-5'>
            <Row className='bg-dark'>
                <div className='col-md-6 text-white text-start my-2'>
                    <h1><span className='text-danger'>Chattogram </span>, Bangladesh</h1>
                    <h6 className='mb-3'>South bansbaria , Sitakund , Chattogram</h6>
                    <p>nahidul.arman11@gmail.com</p>
                    <p>+880-01825-2375-76</p>
                
                </div>
                <div className='col-md-6 my-3'>
                    <input type='text' placeholder='Enter your name'></input>
                    <br />
                    <br />
                    <input type='email' placeholder='Enter your email' />
                    <br />
                    <br />
                    <textarea rows='5' cols='22' placeholder='Message'></textarea><br/>
                    <button className='btn-primary' style={{marginLeft: '-120px'}} type='submit'>send</button>
                </div>
                <small className='text-white'>&copy; Arman  All right
                 reserved</small>
            </Row>
        </Container>
    );
};

export default Footer;