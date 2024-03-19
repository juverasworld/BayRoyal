// import React from 'react'
import "../components/Payroll.css";
// import "./Payment/Payment.css"
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import ScrollReveal from "scrollreveal";
import Logo from "../components/Logo";
import { TweenMax, Expo, Power3 } from "gsap";
import { Link } from "react-router-dom";
// import Footer from "../components/Foot";
const Projects = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-line"
      );
    };

    const handlenavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    menuBtn.addEventListener("click", handleMenuClick);
    navLinks.addEventListener("click", handlenavClick);

    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".content h1", { ...scrollRevealOption });
    ScrollReveal().reveal(".content h4", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".content h2, .content h6, .content form", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".content p", { ...scrollRevealOption, delay: 1500 });
    ScrollReveal().reveal(".content .socials span", {
      ...scrollRevealOption,
      delay: 2000,
      interval: 500,
    });

    // Cleanup function to remove event listeners
    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      navLinks.removeEventListener("click", handlenavClick);
    };
  }, []);
  useEffect(() => {
    // Animation logic here
    const animateElements = () => {
      TweenMax.to(".first", 1.5, {
        delay: 0.2,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      TweenMax.to(".second", 1.5, {
        delay: 0.4,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      TweenMax.to(".third", 1.5, {
        delay: 0.6,
        left: "-100%",
        ease: Expo.easeInOut,
      });

      TweenMax.from(".logo", 1, {
        delay: 1,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".menu", 1, {
        delay: 1.2,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".search", 0.8, {
        delay: 1.6,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".bag", 1, {
        delay: 1.6,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.staggerFrom(
        ".media ul li",
        1,
        {
          delay: 2,
          opacity: 0,
          x: -20,
          ease: Power3.easeInOut,
        },
        0.08
      );

      TweenMax.from(".size", 1, {
        delay: 1.8,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      TweenMax.staggerFrom(
        ".size ul li",
        0.3,
        {
          delay: 2,
          opacity: 0,
          y: 20,
          ease: Power3.easeInOut,
        },
        0.08
      );
      TweenMax.from(".bottom-right ul li:first-child", 0.5, {
        delay: 2.4,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".bottom-right ul li:last-child", 0.6, {
        delay: 2.4,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".bottom-img", 1, {
        delay: 2.4,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".product-title", 3, {
        delay: 2.2,
        opacity: 0,
        y: 50,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".product-img", 1, {
        delay: 4.2,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".product-desc p", 3, {
        delay: 4.5,
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".product-desc button", 3, {
        delay: 6,
        opacity: 0,
        y: -50,
        ease: Expo.easeInOut,
      });
    };

    animateElements();

    // Clean up animations on unmount
    return () => {
      // Ensure to clean up any ongoing animations or timers
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
        staggerChildren: 0.3,
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
    <body>
      <div class="overlay first"></div>
      <div class="overlay second"></div>
      <div class="overlay third"></div>
      <div className="nav">
        <div class="nav__bar">
          <div class="nav__header">
            <div class="nav__logo">
              <Logo />
            </div>
            <div class="nav__menu__btn" id="menu-btn">
              <i class="ri-menu-line"></i>
            </div>
          </div>
          <ul class="nav__links" id="nav-links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Payment">PAYMENT</Link>
            </li>
            <li>
              <Link to="/Payroll">PAYROLL</Link>
            </li>
            <li>
              <Link to="/Projects">PROJECT</Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="bg3"
        variants={conatiner}
        initial="hidden"
        animate="show"
      >
        <div className="container">
          <div className="contens">
            <h1>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
              >
                P
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.9"
                data-scroll-speed="4"
              >
                R
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.06"
                data-scroll-speed="4"
              >
                O
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.04"
                data-scroll-speed="4"
              >
                J
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.04"
                data-scroll-speed="4"
              >
                E
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.04"
                data-scroll-speed="4"
              >
                C
              </motion.span>
              <motion.span
                variants={item}
                data-scroll
                data-scroll-delay="0.4"
                data-scroll-speed="4"
              >
                T
              </motion.span>
              {/* Payment */}
              <br />
              {/* Holiday */}
            </h1>
            <motion.h4
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="2"
            >
              {/* Our Payment */}
            </motion.h4>
            {/* <h2>GET 20% OFF</h2> */}
            <motion.h6
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="2"
            >
              All Projects are designed and executed in the finest details with Precision within your agreed Timeline andBudgets
            </motion.h6>

            <motion.p
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="2"
            >
            We deliver all projects using international best practices, timely and within industry matched budgets.
            </motion.p>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="contains">
          <div class="row">
            <div class="footer-col">
              <h4>Lagos</h4>
              <ul>
                <li> 6b Saka Jojo Street, </li>
                <li>Off Adeola Odeku,Off</li>
                <li>Ideja, Victoria Island</li>
                <li>Lagos, Nigeria</li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Abuja</h4>
              <ul>
                <li>22 Kumasi, Crescent,</li>
                <li>Wuse 2 Federal,</li>
                <li>Capitial Territory</li>
                <li>Abuja, Nigeria</li>
                {/* <li><a href="#">payment options</a></li> */}
              </ul>
            </div>
            <div class="footer-col">
              <h4>Accra</h4>
              <ul>
                <li>Regus Building,</li>
                <li>5 Roman Road,</li>
                <li>Off Borstal Ave Lane.</li>
                <li>Accra</li>
                <li>
                  {" "}
                  <a href="tel:+233 541 604 192">P:+233 541 604 192</a>{" "}
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Nairobi</h4>
              <ul>
                <li>Windsor House,</li>
                <li>University way,</li>
                <li>Muindi Mbugu Street, </li>
                <li>Nairobi, Kenya.</li>
                <li>
                  {" "}
                  <a href="tel:+233 541 604 192">P:+233 541 604 192</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <Footer/> */}
    </body>
  );
};

export default Projects;
