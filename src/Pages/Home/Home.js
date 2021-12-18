import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Myprojects from './Myprojects/Myprojects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Myprojects></Myprojects>
        </div>
    );
};

export default Home;