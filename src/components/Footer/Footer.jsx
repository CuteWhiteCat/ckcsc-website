import React from "react";
import { easeInOut, motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkSub,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";
import AnimatedTextCharacter from "../Animation/AnimatedTextCharacter";

const Footer = () => {
    return (
        <FooterContainer className="bg-gray-900 mt-5" id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkTitle>
                            <AnimatedTextCharacter text="聯絡我們" />
                        </FooterLinkTitle>
                        <FooterLinkSub className="mt-5">
                            <AnimatedTextCharacter text="Contact Us" />
                        </FooterLinkSub>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.facebook.com/club.ckcsc.info"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.instagram.com/ckcsc35th_diary/"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//tellonym.me/ckcsc35"
                                target="_blank"
                                aria-label="Mail"
                            >
                                <SiGmail />
                            </SocialIconLink>
                        </SocialIcons>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>
                            <motion.span
                                className=""
                                initial="initial"
                                whileInView="animate"
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        y: -20,
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                transition={{
                                    type: easeInOut,
                                    duration: 1.0,
                                    delay: 0.5,
                                }}
                            >
                                CKCSC © {new Date().getFullYear()} All rights
                                reserved.
                            </motion.span>
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
