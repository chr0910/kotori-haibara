import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const ServicesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-bottom: solid 1px #eee;
    padding: 100px 0;
`

export const ServicesWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    color: #444;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`

export const ServicesH1 = styled.h1`
    text-align: start;
    font-size: 40px;
    color: #000;
    margin-bottom: 60px;
    border-bottom: 3px solid #ECD82E;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`

export const ServicesH2 = styled.h2`
    font-family: sans-serif;
    font-size: 1rem;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`

export const ServicesP = styled.p`
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin: 0.9rem;
    }
`

export const ServicesIcon = styled.h3`
    font-size: 3rem;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const GuidelineWrapper = styled.div`
    margin: 60px auto 0;
    padding: 13px;
    min-width: 778px;
    max-width: 1100px;
    height: 70px;
    border-radius: 10px;
    background: #EEDF82;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    &:hover {
        background: rgba(236, 216, 46, 0.7);
    }

    @media screen and (max-width: 768px) {
        min-width: 0;
        width: 90vw;
    }
`

export const GuidelineDate = styled.span`
    margin-right: 10px;
    padding: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.7);
    cursor: default;
`

export const GuidelineLinkRouter = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
`