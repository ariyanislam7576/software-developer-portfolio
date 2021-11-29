import React from 'react';
import { Container, Row } from 'react-bootstrap';
import myimage from '.././../../image/image.jpg'

const Banner = () => {

    const portfolioBanner = {
        background: `url(${myimage})`,
        backgroundColor: "rgba(53, 73, 117 , 0.5)",
        backgroundBlendMode: "darken , luminosity"

    }
    return (
        <Container style={portfolioBanner}>
          <Row>
              <div className='col-md-6 text-white'>
                  <h1 className='fw-bold fs-1 my-5'>HEY <br/> 
                  I'm ARMAN
                  </h1>
                  <p>I am Md Nahidul islam arman. Being interested to explore technologies I found software engineering as my passion. I am aspiring to bring that passion to a full-time/part-time role.</p>
                  <button className='btn-danger my-5'>Download Resume</button>
              </div>
              <div className='col-md-6'></div>
          </Row>
        </Container>
    );
};

export default Banner;