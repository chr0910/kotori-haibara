import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const AccessContainer = styled.div`
    background: #f9f9f9;
    padding: 50px 30px;
    height: 100%;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export const AccessHeadding = styled.div`
    height: 200px;

    @media screen and (max-width: 768px) {
        height: 100px;
    }
`

export const AccessH1 = styled.h1`
    padding-top: 100px;
    font-size: 40px;
    text-align: center;
    
    &::after {
        content: 'アクセス';
        width: 200px;
        border-bottom: 3px solid #ECD82E;
    }

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        font-size: 25px;
    }
`

export const AccessLink = styled(LinkR)`
    text-decoration: none;
    cursor: pointer;
`

export const AccessMap = styled.img`
  display: block;
  margin: 40px auto;
  width: 50%;
`

export const AccessTextWrap = styled.div`
    margin-left: 25%;
    margin-bottom: 20px;
`

export const AccessText = styled.p`
    font-size: 20px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
`