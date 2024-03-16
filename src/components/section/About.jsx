import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { useRef } from "react";
import React, { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carousel from "../Carousel";
import Button from "../Button";
import { dark, light } from "../../styles/Themes";
import { Link } from "react-router-dom";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  // background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  // color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  // color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  // color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin: 0 auto;
    }
  }
`;
const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);
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
    
    <Section id="about" ref={ref} className="white-background" variants={conatiner} initial="hidden" animate="show">
      <Container>
        {/* <Box>
          <Carousel />
        </Box> */}
        <div className="">
        <div className="flex lg:flex-row flex-col  ">
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    // className="basis-2/6"
                  >
                    <video
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="none"
                      style={{
                        clipPath:
                          "polygon(1px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px))",
                        visibility: "visible",
                      }}
                      data-stop="true"
                    >
                      <source
                        src="https://phenomenonstudio.com/wp-content/uploads/2021/10/home-1.mov"
                        type='video/mp4; codecs="hvc1"'
                      />
                      <source
                        src="https://phenomenonstudio.com/wp-content/uploads/2021/10/Home-2.webm"
                        type="video/webm"
                      />
                      <source
                        src="https://phenomenonstudio.com/wp-content/uploads/2021/10/Home-2.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                </div>
        </div>
        <Box>
          <Title>
          <motion.p variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4" className="my-5">

            Welcome To
            <br /> Bay Royal.
          </motion.p>
          </Title>
          <SubTitle>
            <motion.p className="" variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4" >

            Navigating the business terrain together, One solution at a time Bay
            Royal International Limited is your trusted partner for achieving
            exceptional results, From payments, projects, payroll to P.E.O.
            {/* services, we are ready to work closely with you to achieve your
            business objectives. */}
            </motion.p>
          </SubTitle>
          <SubText>
          
          </SubText>
          <ButtonContainer>
            <ThemeProvider theme={light}>
            {/* <a href="mailto:peter@bayroyalinternational.com">
              <Button text="Contact Us"  />
              </a> */}
              <Link to="/Projects">
              <Button text="Contact Us"  />
              </Link>
              </ThemeProvider>

            {/* <a href="mailto:peter@bayroyalinternational.com">
              <Button text="Contact Us"  />
              </a> */}
            {/* </ThemeProvider> */}
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
