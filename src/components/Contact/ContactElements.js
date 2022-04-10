import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: #ecece4;
    padding: 130px 0;
    display: flex;
    flex-direction: column;
`

export const FormWrap = styled.div`
    margin: 50px auto 0;
    max-width: 800px;
    width: 50%;
    height: 100%;

    @media screen and (max-width: 1270px) {
        width: 70%;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`
 
export const ContactH1 = styled.h1`
    padding-top: 100px;
    font-size: 40px;
    text-align: center;
    
    &::after {
        content: 'お問い合わせ';
        width: 200px;
        border-bottom: 3px solid #ECD82E;
    }

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        font-size: 25px;
    }
`

export const ContactSubmit = styled.input`
    background: #ECD82E;
    color: #010606;
    border: none;
    border-radius: 10px;
    padding: 22px 100px;
    margin: 30px auto;
    font-size: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
     	transform: translateY(-4px);
    }
`