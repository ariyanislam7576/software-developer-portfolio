import React from 'react';
import { Container, Row } from 'react-bootstrap';
import myimage from '.././../../image/image.jpg'
import resume from '../../../Resume/Engineer resume.pdf'

const Banner = () => {

    const portfolioBanner = {
        background: `url(${"https://image.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg"})`,
        backgroundColor: "rgba(53, 73, 117 , 0.5)",
        backgroundBlendMode: "darken , luminosity",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

    }
    return (
        <Container id='home' style={portfolioBanner}>
          <Row>
              <div className='col-md-6 col-lg-6 col-sm-12 col-12 text-white'>
                  <h1 className='fw-bold fs-1 my-5'>HEY <br/> 
                  I'm ARMAN
                  </h1>
                  <p>I am Md Nahidul islam arman. Being interested to explore technologies I found software engineering as my passion. I am aspiring to bring that passion to a full-time/part-time role.</p>
                  <div>
                      <a href={resume} target='_blank'>
                          <button className='btn-primary my-3'>
                          Watch Resume
                          </button>
                             </a>
                  </div>
                  
              </div>
              <div className='col-md-6'></div>
          </Row>
        </Container>
    );
};

export default Banner;