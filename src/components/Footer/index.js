import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
import { MdPhoneIphone } from 'react-icons/md';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FooterContainer, FooterTextItems, FooterTextContainer, FooterTextWrapper, FooterTextH1, FooterTextH2, FooterWrap, SocialIconLink, SocialIcons, SocialLeft, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterTextContainer>
                    <FooterTextWrapper>
                        <FooterTextItems>
                            <FooterTextH1>ことり 放課後等デイサービス</FooterTextH1>
                            <FooterTextH2>奈良県宇陀市天満台西一丁目20-9</FooterTextH2>
                        </FooterTextItems>
                        <FooterTextItems>
                            <FooterTextH2><FiPhoneCall /> 0744-55-2827</FooterTextH2>
                            <FooterTextH2><MdPhoneIphone /> 090-1903-5834</FooterTextH2>
                            <FooterTextH2><FiMail /> nishikeik@gmail.com</FooterTextH2>
                        </FooterTextItems>
                    </FooterTextWrapper>
                </FooterTextContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLeft></SocialLeft>
                        <WebsiteRights>kotori &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <IoLogoTiktok />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
