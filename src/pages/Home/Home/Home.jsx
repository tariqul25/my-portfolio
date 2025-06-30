import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import Academic from '../Academic/Academic';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Academic></Academic>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;