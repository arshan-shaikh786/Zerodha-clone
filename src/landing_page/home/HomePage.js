import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Pricing from './Pricing';
import Education from './Education';
function HomePage() {
    return ( 
        <>
         
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>

    );
}

export default HomePage;