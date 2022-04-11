import React from 'react'
import { BiCookie, BiFootball } from 'react-icons/bi';
import { RiBus2Line, RiPencilRulerLine } from 'react-icons/ri';
import { IoColorPaletteOutline, IoDesktopOutline } from 'react-icons/io5';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, GuidelineWrapper, GuidelineDate, GuidelineLinkRouter } from './ServicesElements';
import GuidelinePdf from '../../assets/pdf/guidelines.pdf';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>サービスの内容</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon><BiFootball /></ServicesIcon>
                    <ServicesH2>運動</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><RiPencilRulerLine /></ServicesIcon>
                    <ServicesH2>学習支援</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><IoDesktopOutline /></ServicesIcon>
                    <ServicesH2>パソコン</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><IoColorPaletteOutline /></ServicesIcon>
                    <ServicesH2>創作活動</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><BiCookie /></ServicesIcon>
                    <ServicesH2>おやつ作り</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesP>ABC</ServicesP>
                    <ServicesH2>英会話実践体験</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><RiBus2Line /></ServicesIcon>
                    <ServicesH2>送迎サービス</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
            <GuidelineWrapper>
                <GuidelineLinkRouter
                    href={GuidelinePdf}
                    target="_blank"
                    rel="noopener noreferrer">
                        <GuidelineDate>2022/04/01</GuidelineDate>
                        放課後等デイサービスガイドライン 評価表
                </GuidelineLinkRouter>
            </GuidelineWrapper>
        </ServicesContainer>
    )
}

export default Services;
