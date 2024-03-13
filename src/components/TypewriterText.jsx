import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import { motion } from "framer-motion";


import "@fontsource/akaya-telivigala";
import { dark } from "../styles/Themes";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    // font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color:white;
  // color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  border:2px, solid red;
  width: 80%;
  display:flex;


  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    display:flex;

    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  display:flex;
  // background-color:white;
  // items
  // align-self: flex-start;

  @media (max-width: 48em) {
    // align-self: center;
  display:flex;

    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypewriterText = () => {
  const conatiner = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
  
      transition: {
        delayChildren: 2,
       staggerChildren:0.3,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <>
   
      <Title variants={conatiner} initial="hidden" animate="show" className="">
        
        <div className="md:text-[2.5vw] text-[25px] leading-[50px] text-white relative ">

        <div className="flex ">
      <motion.h1 className="" variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
           Bay 
          </motion.h1>
          {/* <motion.h1 variants={item} data-scroll data-scroll-delay="0.9" data-scroll-speed="4">
            e
          </motion.h1> */}
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            Royal
          </motion.h1>

        </div>
       
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
           International
          </motion.h1>
        </div>
        <div className="">

        {/* <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          className=""
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">Payout  </span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString('<span class="text-2">Payment</span>')
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'> Project</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
          variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4"
        /> */}
        </div>
      </Title>
<div className="md:my-10 my-6">

      <Subtitle >
      <motion.p variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
        Payment. Project. Payroll
        </motion.p>
        </Subtitle>
</div>


      <ButtonContainer>
        <ThemeProvider theme={dark}>
<a href="mailto:peter@bayroyalinternational.com">

        <Button text="Contact Us" />
</a>
        </ThemeProvider>
      </ButtonContainer>
    </>
  );
};

export default TypewriterText;
