import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({p}) => {
    const { id ,name, des, img} = p
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-start'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {des.slice(0,100)}
                </Card.Text>
                <Link to={`/projects/${id}`}><button className='btn-primary'>Details</button></Link>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Project;