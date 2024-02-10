import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Header/Hero';

const Home = () => {
    return (
        <div className='max-w-screen-lg mx-auto h-screen overflow-hidden'>
            <Header />
            <Hero />
        </div>
    );
}

export default Home;
