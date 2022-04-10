import React, { useState } from 'react';
import Access from '../components/Access';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Process from '../components/Process';
import Sidebar from '../components/Sidebar';



const Home = () => {
    // open mobile sidebar menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
        {/* pass these value to Sidebar Navbar index.js */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Process />
            <Access />
            <Footer />
        </>
    )
}

export default Home;
