import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleProject = () => {
    const { id } = useParams()
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ariyanislam7576/projects.json/main/product.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data)
            })
    }, [])
    // const { serviceId } = useParams({})
    const site = []
    if (project?.length) {
        const findSite = project.find(p => p.id === parseInt(id))
        site.push(findSite)
    }

    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {
                    site.map(s => 
                    <Col>
                        <Card key={s.id}>
                            <Card.Img className='w-100' variant="top" src={s.img} />
                            <Card.Body>
                                <Card.Title>{s.name}</Card.Title>
                                <Card.Text>
                                    {s.des}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default SingleProject;