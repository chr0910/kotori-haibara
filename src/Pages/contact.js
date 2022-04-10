import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop'; // to fix if doest show page of top when jump to other page
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const ContactPage = () => {
    // open mobile sidebar menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Contact />
            <Footer />
        </>
    )
}

export default ContactPage
