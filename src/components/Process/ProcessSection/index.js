import React from 'react';
import { Column1, Column2, Heading, Img, ImgWrap, ProcessContainer, ProcessRow, ProcessWrapper, Subtitle, TextWrapper, TopLine } from './ProcessElements';

const ProcessSection = ({
    lightBg,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt
    }) => {
    return (
        <>
            <ProcessContainer lightBg={lightBg}>
                <ProcessWrapper>
                    <ProcessRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </ProcessRow>
                </ProcessWrapper>
            </ProcessContainer>
        </>
    )
}

export default ProcessSection;
