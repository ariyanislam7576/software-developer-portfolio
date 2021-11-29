import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Myprojects = () => {
    return (
        <Container>
            <h2>My Projects</h2>
            <Row>
                <div className='col-md-4'>
                    <a href='https://juta-collection.firebaseapp.com/'>Premium shoe collection</a>
                </div>
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </Row>
        </Container>
    );
};

export default Myprojects;