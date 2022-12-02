import React from 'react';
import { AiFillLinkedin} from 'react-icons/ai';
import { FaFacebook, FaDiscord, FaTelegram, FaTwitter} from "react-icons/fa";
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Tel</LinkTitle>
          <LinkItem href="https://calendly.com/nasriamira88/15min" target="_blank">Réservez votre appel avec nous</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nasriamira88@gmail.com">
            contact@carthage3.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© Copyright CARTHAGE 3.0. All Rights Reserved</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.facebook.com/groups/789869052085442" target="_blank">
            <FaFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/company/near-tunisia/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/NearTunisia" target="_blank">
            <FaTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.gg/bRwG8hEm" target="_blank">
            <FaDiscord size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://t.me/nearhubtunisia" target="_blank">
            <FaTelegram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;