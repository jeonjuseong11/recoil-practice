import {
  CopyRightText,
  Divider,
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterSection,
  GridContainer,
  GridItem,
  LinkList,
  ListItem,
  LogoContainer,
  SectionHeading,
  SocialMediaLinks,
  StyledLink,
} from './FooterStyle';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoContainer>
            <a className="flex items-center">
              <img
                src={Logo}
                className="flex items-center"
                alt="StandardNetworks Logo"
              />
            </a>
          </LogoContainer>
          <GridContainer>
            <GridItem>
              <SectionHeading>Resources</SectionHeading>
              <LinkList>
                <ListItem>
                  <StyledLink href="http://www.standardnetworks.co.kr/customer/onapp/main.vw">
                    Standard Networks
                  </StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>{' '}
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>
              </LinkList>
            </GridItem>
            <GridItem>
              {' '}
              <SectionHeading>Resources</SectionHeading>
              <LinkList>
                <ListItem>
                  <StyledLink href="http://www.standardnetworks.co.kr/customer/onapp/main.vw">
                    Standard Networks
                  </StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>dddd</StyledLink>
                </ListItem>
              </LinkList>
            </GridItem>
          </GridContainer>
        </FooterSection>
        <Divider />
        <FooterBottom>
          <CopyRightText>
            © 2024{' '}
            <StyledLink href="Standard Networks">
              Standard Networks™
            </StyledLink>
            . All Rights Reserved.
          </CopyRightText>
          <SocialMediaLinks>{/* 소셜 미디어 링크 */}</SocialMediaLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
