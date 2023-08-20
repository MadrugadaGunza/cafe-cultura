import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Produto from '../components/Produto';
import Cliente from '../components/Cliente';
import Footer from '../components/Footer';
import Newlatter from '../components/Newlatter';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Historia />
            <Produto />
            <Cliente />
            <Newlatter />
            <Footer />
        </div>
    )
}

export default Home