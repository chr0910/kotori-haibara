import styled from'styled-components';

export const FooterContainer = styled.footer`
    background: #EEDF82;
`

export const FooterWrap = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterTextContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 820px) {
        padding-top: 10px;
    }
`

export const FooterTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterTextItems = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    text-align: left;
    width: 350px;
    box-sizing: border-box;
    color: #000;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterTextH1 = styled.h1`
    font-size: 1.6rem;
    margin-bottom: 10px;

    @media screen and (max-width: 1063px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }
`

export const FooterTextH2 = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 10px;

    @media screen and (max-width: 820px) {
        font-size: 1rem;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLeft = styled.div`
    justify-self: start;
    display: flex;
    width: 100px;
`

export const WebsiteRights = styled.small`
    color: #000;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`

export const SocialIconLink = styled.a`
    color: #000;
    font-size: 24px;
`