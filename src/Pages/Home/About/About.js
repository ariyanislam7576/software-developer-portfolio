import React from 'react';
import { Container, Row } from 'react-bootstrap';
import image from '../../../image/arman.jpg'

const About = () => {
    return (
        <Container>
            <h1 className='my-5'>About Us</h1>
            <Row>
                <div className='col-md-6'>
                    <img className='w-100' src={image} />
                </div>
                <div className='col-md-6 text-start my-3'>
                    <p> I am Md Nahidul islam arman.I am a junior software engineer. Being interested to explore technologies I found software engineering as my passion.
                        I have weekness about technologies.I am aspiring to bring that passion to a full-time/part-time role.</p>
                    <button className='btn-primary'>Hire me</button>
                </div>
            </Row>
        </Container>
    );
};

export default About;