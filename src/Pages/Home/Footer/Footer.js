// import React from 'react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pmll1yo', 'template_w2d0uoj', form.current, 'user_nvfpcwQSOtoqabXTGazgk')
            .then((result) => {
                console.log(result.text);
                alert('sent')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container className='my-5' id='contact'>
            <Row className='bg-dark'>
                <div className='col-md-6 text-white text-start my-2'>
                    <h1><span className='text-danger'>Chattogram </span>, Bangladesh</h1>
                    <h6 className='mb-3'>South bansbaria , Sitakund , Chattogram</h6>
                    <p>nahidul.arman11@gmail.com</p>
                    <p>+880-01825-2375-76</p>
                    <a href="https://web.facebook.com/nahidbinmofiz.bg" target='_blank' >
                        <img style={{width: '30px', marginRight: '10px'}} src='https://cdn-icons-png.flaticon.com/512/733/733547.png'/>
                        </a>
                    <a href="https://www.instagram.com/nahiyanariyan/"
                    target='_blank' >
                        <img style={{width: '30px', marginRight: '10px'}} src='https://cdn-icons-png.flaticon.com/512/174/174855.png'/>
                    </a>
                    <a href="https://github.com/ariyanislam7576"target='_blank' >
                    <img style={{width: '30px', marginRight: '10px'}} src='https://cdn-icons-png.flaticon.com/512/733/733609.png'/>
                    </a>
                    <a href="https://twitter.com/NahidulArman" target='_blank'>
                    <img style={{width: '30px', marginRight: '10px'}} src='https://cdn-icons-png.flaticon.com/512/145/145812.png'/>
                    </a>
                    <img style={{width: '30px', marginRight: '10px'}} src='https://cdn-icons-png.flaticon.com/512/174/174883.png'/>
                </div>
                <div className='col-md-6 my-3'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Enter your name"/>
                        <br/>
                        <br/>
                        <input type="email" name="user_email" placeholder='Enter your email' />
                        <br/>
                        <br/>
                        <textarea cols='22' rows='5' name="message" placeholder='Message' />
                        <br/>
                        <br/>
                        <input className='btn-primary' type="submit" value="Send" />
                    </form>
                </div>
                <small className='text-white'>&copy; Arman  All right
                    reserved</small>
            </Row>
        </Container>
    );
};

export default Footer;