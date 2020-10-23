import React from 'react';
import About from '../Components/About';
import BigSlider from '../Components/BigSlider';
import Blog from '../Components/Blog';
import ClientFeedback from '../Components/ClientFeedback';
import NavbarDesktop from '../Components/Common/NavbarDesktop';
import Headline from '../Components/Healine';

const HomePage = () => {
    return (
        <div>
           <NavbarDesktop/>
           <BigSlider/> 
           <Headline/>
           <About/>
           <ClientFeedback/>
           <Blog/>
        </div>
    );
};

export default HomePage;