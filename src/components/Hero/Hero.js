import React from "react";
import { Link } from "react-router-dom";
import { Container, MainHeading } from "../../globalStyles";
import {
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  CenteredContainer,
} from "./HeroStyles";
import myImage from "../../assets/Clean1.jpeg";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <MainHeading>
            Votre système de ventilation est entre bonne mains avec nous.
          </MainHeading>
          <HeroText>
            Nous offrons un service hors-pairs pour la propreté de votre
            restaurant.
          </HeroText>
          <ButtonWrapper>
            <Link to="/pricing">
              <HeroButton>Offres</HeroButton>
            </Link>
            <Link to="/about">
              <HeroButton>En savoir plus</HeroButton>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection>
      <CenteredContainer>
        <img src={myImage} alt="Your Alt Text" />
      </CenteredContainer>
    </>
  );
};

export default Hero;
