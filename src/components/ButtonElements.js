import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#ECD82E' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '22px 38px' : '12px 38px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    text-decoration: none;
    display: ${({btnDisplay}) => (btnDisplay ? 'flex' : 'none')};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: ${({primary}) => (primary ? '#ECD82E' : '#ECD82E')};
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
     	transform: translateY(-4px);
    }
`

export const ButtonStickey = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
`