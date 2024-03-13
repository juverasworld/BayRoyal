import React, { useEffect } from 'react';
import gsap from 'gsap';


import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "../styles/Themes";
import Nav from "./Nav";
import About from "./section/About";

import Footer from "./Footer";

import ScrollToTop from "./ScrollToTop";
import Mab from "./Mab";
import { motion } from "framer-motion";
// import { slideIn } from "../../utils/motion";
// import { ThemeProvider } from "styled-components";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import Home from "./section/HOme";
import { AnimatePresence } from "framer-motion";

import ScrollTriggerProxy from "./ScrollTriggerProxy";
import Hero from "./Comp";
import Ana from "./Ana";
// import Load from "./components/Loader";
// import Loader from "./components/Loader";

const Loader = () => {
  useEffect(() => {
    const animate = (counter, duration, delay = 0) => {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power2.inOut"
      });
    };

    const counter3 = document.querySelector(".counter-3");
    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
      width: 0,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: 0,
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader-2", {
      x: -7,
      y: 75,
      duration: 0.5,
    },
      "<"
    );

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });

    gsap.to(".h1", 1.5, {
      delay: 7,
      y: -80,
      ease: "power4.inOut",
      stagger: {
        amount: 0.1,
      }
    });
  }, []);

  const containerRef = useRef(null);
  return (
  <>


        <div className="">
        <GlobalStyles />
      <ThemeProvider theme={light}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />

          <AnimatePresence>
            <main className="relative app z-0 black-gradient" data-scroll-container ref={containerRef}>
              <div className="bg-cover bg-no-repeat bg-center">

              <Nav />
              <div id="home">

              <Mab />
              </div>
<div id="about-us">

              <About />
</div>
              <div>
                <div id="our-services">

               <Ana/>
                </div>
               

              </div>
              <div />
              {/* <Hero/> */}
              {/* <Roadmap /> */}
              {/* <Showcase/>
 <Team/> */}
              {/* <Faq /> */}
              <div id="contact"> 

              <Footer />
              </div>
              </div>
              <ScrollToTop />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
        </div>

        <div className="loading-screen">
          <div className="loader">
            <div className="loader-1 bar"></div>
            <div className="loader-2 bar"></div>
          </div>

          <div className="counter">
            <div className="counter-1 digit">
              <div className="num">0</div>
              <div className="num num1offset1">1</div>
            </div>
            <div className="counter-2 digit">
              <div className="num">0</div>
              <div className="num num1offset2">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="counter-3 digit">
              <div className="num">0</div>
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
          </div>
        </div>
  </>
     
  );
};

export default Loader;
