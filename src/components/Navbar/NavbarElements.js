import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    /* background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.3)' : 'transparent')}; */
    background: #f9f9f9;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    height: 100px;
    margin-top: -120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 850px) {
        height: 80px;
        border-bottom: 3px solid #EEDF82;      
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    z-index: 1;

`

export const NavLogo = styled(LinkR)`
    color: black;
    justify-self: flex-start;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-right: auto;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 1270px) {
        font-size: 1rem;
        margin-left: 0;
    }
`

export const NavLogoImg = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 1rem;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 1270px) {
        width:50px;
        height: 50px;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        color: black;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 20px;

    @media screen and (max-width: 1270px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin-top: 20px;
`
export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 80%;
    cursor: pointer;

    &:hover {
        color: #ECD82E;
    }
    &.active {
        border-bottom: 3px solid #ECD82E;
    }
`

export const NavLinkRouter = styled(LinkR)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 80%;
    cursor: pointer;

    &:hover {
        color: #ECD82E;
    }
    &.active {
        border-bottom: 3px solid #ECD82E;
    }
`

export const NavPhoneNumner = styled.h2`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 0;
    margin-left: 1rem;
    height: 80%;
    border-left: solid 2px black;
    
    @media screen and (max-width: 1270px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 1063px) {
        display: none;
    } 
`

export const NavIcon = styled.span`
    width: 50px;
`