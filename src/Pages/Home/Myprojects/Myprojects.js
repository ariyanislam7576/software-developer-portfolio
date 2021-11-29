import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Myprojects = () => {
    return (
        <Container >
            <h2 className='my-5'>My Projects</h2>
            <Row >
                <div className='col-md-4'>
                    <img className='w-100' src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                    <h3>Premium Shoe</h3>
                    <p className='text-start'>benefits of niche marketing that enable you to stand out above your competition, better serve your audience.</p>
                    <a href='https://juta-collection.firebaseapp.com/'>See project</a>
                </div>
                <div className='col-md-4'>
                    <img className='w-100' src='https://images.unsplash.com/photo-1476297820623-03984cf5cdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60'/>
                    <h3>Happy Travel</h3>
                    <p className='text-start'>Find Traveling Website safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. </p>
                    <a href='https://traveling-site-6433b.firebaseapp.com/'>See project</a>
                </div>
                <div className='col-md-4'>
                    <img className='w-100' src='https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60'/>
                    <h3>Doctor's Home</h3>
                    <p className='text-start'>This is a Healthcare related website.This site is user friendly thtt's why you can easily see our services after log in.</p>
                    <a href='https://doctor-s-home.firebaseapp.com/'>See project</a>
                </div>
            </Row>
        </Container>
    );
};

export default Myprojects;