import React, { useEffect, useState } from 'react';
import { Nav, NavbarContainer, NavLogo, NavLogoImg, MobileIcon, NavMenu, NavItem, NavLinks, NavPhoneNumner, NavIcon, NavLinkRouter } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
// all icons style to be controlled by IconContext.Provider
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../assets/images/kotorilogo2.png';

const Navbar = ({toggle}) => {
    // change color of navbar when scroll down
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: "black"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavLogoImg src={Logo} />
                        放課後等デイサービス
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-100} // activeClass="active" and add .active in css
                                    >
                                <NavLinkRouter to="/">
                                    ご案内
                                </NavLinkRouter>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="process"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-100}>
                                <NavLinkRouter to="/">
                                    ご利用までの流れ
                                </NavLinkRouter>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="access"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-100}>
                                <NavLinkRouter to="/">
                                    アクセス
                                </NavLinkRouter>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to="overview"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-100}>
                            <NavLinkRouter to="/overview" 
                            activeClassName="NavLinkRouter.active">
                                会社概要
                            </NavLinkRouter>
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavPhoneNumner>
                                <NavIcon><FiPhoneCall /></NavIcon>0744-55-2827
                            </NavPhoneNumner>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
