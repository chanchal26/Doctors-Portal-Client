import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import InfoCards from './InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;