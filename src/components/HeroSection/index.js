import React from 'react';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroSectionElements';
import Img from '../../assets/images/kidsSmile.jpg'
import { Button } from '../ButtonElements'

const HeroSection = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Img} alt="girl" />
            </HeroBg>
            <HeroContent>
                <HeroH1>＼\無料体験受付中/／</HeroH1>
                <HeroP>見学・体験お待ちしております。</HeroP>
                <HeroP>お気軽にご相談ください。</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" primary="true" big="true" dark="true" fontBig="true" btnDisplay="true">
                        お問い合わせ
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
