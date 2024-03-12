import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StarsCanvas } from "../canvas";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 10vw;
  // background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled(motion.div)`
  width: 80%;
  height: 150vh;
  // background-color: ${(props) => props.theme.body};
  margin-top:5vw;
  margin-bottom:5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64rem) {
    width: 100%;
  }
  @media (max-width: 48rem) {
    width: 100%;
  }
`;

// const SvgContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Items = styled(motion.ul)`
list-style:none;
width:90%;
height:100%;
display:flex;
// border:2px pink solid;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 48rem) {
  width: 100%;
}

&>*:nth-of-type(2n+1){
  justify-content:start;
  @media (max-width: 48rem) {
    justify-content:start;


  };
  div{
    border-radius: 0px 0 0px 0;
    text-align:right;

    @media (max-width: 48rem) {
      border-radius:0  0px 0 0px ;
      text-align:left;
      p{
        border-radius:0 0px 0 0px;
    
      }
  
    };
  }
  p{
    border-radius: 0px 0 0px 0;

  }
}
&>*:nth-of-type(2n){
  justify-content:end;
  @media (max-width: 48rem) {
    justify-content:center;

  };
  div{
    border-radius:0 0px 0 0px;
    text-align-left;
  }
 
  p{
    border-radius:0 0px 0 0px;

  }
}


`;

const Item = styled(motion.li)`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 48rem) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled(motion.div)`
  width: 60%;
  height: fit-content;
  padding-top: 5vw;
  padding-bottom: 5vw;
  padding: 2rem;
  // border: 3px solid ${(props) => props.theme.text};
  // background-color: ${(props) => props.theme.carouselColor};
  background-color: rgb(186, 172, 42);
  backface-visibility: visible;
  background-attachment: fixed;
    color: rgb(31, 33, 34);
    
    background-image: url(https://phenomenonstudio.com/wp-content/webp-express/webp-images/themes/phenomenon/img/bg.png.webp);

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitialize;
  color: white;

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitialize;
  color: white;

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const Box = styled(motion.p)`
  height: fit-content;
  
  color: white;
  padding: 1rem;
  position: relative;
  // border: 1px solid ${(props) => props.theme.text};
`;

const RoadMapItem = ({ title, subText, addToRefs }) => {
  return (
    <Item ref={addToRefs}>
      <ItemContainer  variants={slideIn("left", "tween", 0.2, 1)}>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => {};
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
    <Section id="roadmap" className="relative app z-0 black-gradient">
      <Title   variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">RoadMap</Title>

      <div >
        <Container variants={conatiner} initial="hidden" animate="show"> 
          {/* <SvgContainer>
            <DrawSvg />
          </SvgContainer> */}
          <Items   variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            
         
            <RoadMapItem
           
           variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4"
              // addToRefs={addToRefs}
              title="Projects"
              subText="We deliver all projects using international best practices, timely and within industry matched budgets"
            />
            <RoadMapItem
            variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4"
              // addToRefs={addToRefs}
              title="Payments"
              subText="We work with clients to assist them keep pace, capture and develop responses to the rapidly changing payments landscape"
            />
            <RoadMapItem
           variants={item} data-scroll data-scroll-delay="0.13" data-scroll-speed="4"
              // addToRefs={addToRefs}
              title="Payroll"
              subText="We offer employee management services using a professionally certified HR team for indigenous and multinational clients across varied sectors."
            />
            
            {/* <RoadMapItem
            addToRefs={addToRefs}
            title="Holders Ranking"
            subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          /> */}
          </Items>
        </Container>
        <StarsCanvas />
      </div>
    </Section>
  );
};

export default Roadmap;
