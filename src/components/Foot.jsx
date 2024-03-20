import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Twitter from "../Icons/Twitter";

import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import LinkedIn from "../Icons/LinkedIn";
import Phone from "../Icons/Phone";
import Gmail from "../Icons/Gmail";
import "@fontsource/akaya-telivigala";

const Section = styled.section`
  // min-height: 100vh;
  // height:100vh
  width: 100%;
  font-family: "Akaya Telivigala", cursive;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: relative;
  display: flex;

  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 1.2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1{
   font-size: ${(props) => props.theme.fontxxl};

    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  // border:2px solid blue;
  width:100%;
  @media (max-width: 48em) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  // margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    span {
      margin-bottom: 1rem;
    }
  }
`;
const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Section>
   
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="https://linkedin.com/company/bayroyal-international-limited"
              target={"_blank"}
              rel="noopener"
            >
              <LinkedIn />
            </a>
            {/* <a
                  href="tel:+2348039123546"
             
              rel="noopener"
            >
              <Phone/>
            </a> */}
            <a href="https://www.facebook.com/BayRoyalLtd/" target={"_blank"} rel="noopener">
              <Facebook />
            </a>
           
            <a href="mailto:peter@bayroyalinternational.com">
              <Gmail />
            </a>
          </IconList>
        </Left>
        
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Bay Royal. All right reserved.
        </span>
        <span>
          {/* Made with &#10084; by
          <a
            href=" https://vera-black.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vee
          </a> */}
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;