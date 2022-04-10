import styled from 'styled-components';

export const ProcessContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#ecece4')};

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export const ProcessWrapper = styled.div`
    display: grid;
    z-index: 1;
    max-height: 300px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`

export const ProcessRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
    }
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 800;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`

export const Subtitle = styled.p`
    max-width: 460px;
    margin-bottom: 35px;
    font-family: sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    /* to let work break line \n */
    white-space: pre-line;  
    vertical-align: bottom;

    @media screen and (max-width: 768px) {
        letter-spacing: 0;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 50%;
    margin: 0 0 10px 120px;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 30%;
        margin: 0 auto 10px auto;
        display: block;
    }
`

// Process > index
export const ProcessWrap = styled.div`
    background: #ecece4;
    padding: 50px 0;
`

export const HeadWrap = styled.div`
    height: 250px;
    
    @media screen and (max-width: 768px) {
        height: 100px;
    }
`

export const ProcessHeadding = styled.h1`
    padding-top: 100px;
    font-size: 40px;
    text-align: center;
    
    &:after {
        content: 'ご利用までの流れ';
        width: 300px;
        border-bottom: 3px solid #ECD82E;
    }

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        font-size: 25px;
    }
`