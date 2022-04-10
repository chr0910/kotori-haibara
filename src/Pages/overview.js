import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop'; // to fix if doest show page of top when jump to other page
import InfoSection from '../components/InfoSection'
import { homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Garelly from '../components/Garelly';
import Services from '../components/Services';
import Events from '../components/Events';
import { Button, ButtonStickey } from '../components/ButtonElements';

const OverviewPage = () => {
    // open mobile sidebar menu
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div id="overview">
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div style={{marginTop: 100}} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <Events />
            <Garelly />
            <InfoSection {...homeObjThree} />
            <ButtonStickey>
                <Button to="contact" primary="true" big="true" dark="true" fontBig="true" btnDisplay="true">
                    お問い合わせ    
                </Button>
            </ButtonStickey>
            <Footer />
        </div>
    )
}

export default OverviewPage;
