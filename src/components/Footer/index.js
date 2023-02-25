import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/login">How it works</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Investors</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              The Giving Table
            </SocialLogo>
            <WebsiteRights>
              TGT © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/serenafoo"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
