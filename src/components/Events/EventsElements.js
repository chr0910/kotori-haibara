import styled from 'styled-components';

export const EventsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-bottom: solid 1px #eee;
    padding: 100px 10px;
`

export const EventsWrapper = styled.div`
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
        grid-gap: 20px;
    }
`

export const EventsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
`

export const EventsPhoto = styled.img`
    width: 100%;
    margin-bottom: 10px;
    border-radius: 10px 10px 0 0;
`

export const EventsH1 = styled.h1`
    text-align: start;
    font-size: 40px;
    color: #000;
    margin-bottom: 60px;
    border-bottom: 3px solid #ECD82E;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`

export const EventsH2 = styled.h2`
    font-family: sans-serif;
    font-size: 1rem;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`