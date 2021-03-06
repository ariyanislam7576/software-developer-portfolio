import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project/Project';



const project = [
    {
        id: 1,
        name: "Premium Shoe",
        des: "benefits of niche marketing that enable you to stand out above your competition, better serve your audience, and authenticate your brand.",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        scr1: "https://i.ibb.co/WHvZQ1k/screenshots5.png",
        scr2: "https://i.ibb.co/j5jw3SJ/screenshots6.png",
        scr3: 'https://i.ibb.co/WF79cm2/screenshots7.png',
        bp1:"It is very simple and useful app.",
        bp2:"It is user friendly and optimized.",
        bp3:"If you visit the site , you will be find a great idea about niche app."

    },
    {
        id: 2,
        name: "Happy Travel",
        des: "Find Traveling Website safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted. Types: Information, Combined Web Results, Easy & Fast, 99% Match.",
        img: "https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        scr1: "https://i.ibb.co/7pt6gx6/screenshots9.png",
        scr2: "https://i.ibb.co/Wc5th8L/screenshots10.png",
        scr3: "https://i.ibb.co/28X0rJQ/screenshots11.png",
        bp1:"This a traveling app.",
        bp2:"This will make it easier for travelers to travel.",
        bp3:"If you visit the site, you will find Important information about travelling"

    },
    {
        id: 3,
        name: "Doctor's Home",
        des: "This is a Healthcare related website.This site is user friendly thtt's why you can easily see our services after log in.If you visit the app , you can found valuable info.So, now you visit the app and inform your opinion",
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60",
        scr1: "https://i.ibb.co/8c4Vqyp/screenshots14.png",
        scr2: "https://i.ibb.co/dc3NcjW/screenshots15.png",
        scr3: "https://i.ibb.co/0Bk1m1K/screenshots16.png ",
        bp1:"This Project is About Health care.",
        bp2:"You can easily see our services after log in.",
        bp3:"If you visit the app , you can find valuable info."
        
    },
]

const Myprojects = () => {
    return (
        <Container id='projects'>
            <h2 className='my-5'>My Project</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    project.map(p => <Project key={p.id}
                        p={p}
                    ></Project>)
                }
            </Row>
        </Container>
    );
};

export default Myprojects;