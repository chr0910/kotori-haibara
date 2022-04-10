import styled from 'styled-components';

export const GarellyContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    border-bottom: solid 1px #eee;
    padding: 100px 0;
`

export const GarellyWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 10px;
    }
`

export const GarellyCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const GarellyPhoto = styled.img`
    width: 300px;
    margin-bottom: 10px;
`

export const GarellyH1 = styled.h1`
    text-align: start;
    font-size: 40px;
    color: #000;
    margin-bottom: 30px;
    border-bottom: 3px solid #ECD82E;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`

export const GarellyH2 = styled.h2`
    font-family: sans-serif;
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`
