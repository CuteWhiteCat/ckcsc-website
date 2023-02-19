import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: fit-content;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
`;

export const FooterLinkTitle = styled.h1`
    color: #fff;
    font-size: 40px;
    letter-spacing: 3px;
    margin-left: auto;
    margin-right: auto;
    font-family: PingFangMedium;

    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 480px) {
        font-family: PingFangRegular;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.5rem;
    }
`;

export const FooterLinkSub = styled.h1`
    color: #fff;
    font-size: 20px;
    margin-bottom: 30px;
    letter-spacing: 2px;
    margin-left: auto;
    margin-right: auto;
    font-family: PingFangLight;

    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 480px) {
        margin-left: auto;
        margin-right: auto;
        font-size: 0.8rem;
        font-family: PingFangLight;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    margin-top: 10px;
    letter-spacing: 2px;
    margin-left: auto;
    margin-right: auto;
    font-family: PingFangThin;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        letter-spacing: 1px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;

    @media screen and (max-width: 480px) {
        margin-top: 20px;
        width: 200px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        color: rgb(254 215 170);
    }
`;
