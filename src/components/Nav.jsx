

// import React, { useState } from "react";
// import styled from "styled-components";
// import Logo from "./Logo";
// import Button from "./Button";

// const Section = styled.section`
// width: 100vw;
// background-color: ${(props) => props.theme.body};
// `;

// const Navbar = styled.nav`
// display: flex;
// justify-content: space-between;
// align-items: center;
// width: 85%;
// height: 5rem;
// margin: 0 auto;

// .mobile {
// display: none;
// }
// @media (max-width: 64em) {
// .desktop {
// display: none;
// }
// .mobile {
// display: inline-block;
// }
// }
// `;
// const Menu = styled.ul`
// display: flex;

// justify-content: space-between;
// align-items: center;
// list-style: none;

// @media (max-width: 64em) {
// position: fixed;
// top: ${(props) => props.theme.navHeight};
// left: 0;
// right: 0;
// bottom: 0;
// width: 100vw;
// height: ${(props) => `calc(100vh - ${(props) => props.theme.navHeight})`};
// z-index: 50;
// background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
// backdrop-filter: blur(2px);
// transform: ${(props) =>
// props.click ? "translateY(0)" : `translateY(100%)`};
// transition: all 0.3s ease;
// flex-direction: column;
// justify-content: center;

// touch-action: none;
// }
// @media (max-width: 48em) {
// position: fixed;
// top: ${(props) => props.theme.navHeight};
// left: 0;
// right: 0;
// bottom: 0;
// width: 100vw;
// height: ${(props) => `calc(100vh - ${(props) => props.theme.navHeight})`};
// z-index: 50;
// background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
// backdrop-filter: blur(2px);
// transform: ${(props) =>
// props.click ? "translateY(0)" : `translateY(100%)`};
// transition: all 0.3s ease;
// flex-direction: column;
// justify-content: center;

// // touch-action: none;
// }
// `;

// const MenuItem = styled.li`
// margin: 0 1rem;
// color: ${(props) => props.theme.text};
// cursor: pointer;

// &::after {
// content: " ";
// display: block;
// width: 0%;
// height: 2px;
// background: ${(props) => props.theme.text};
// transition: width 0.3s ease;
// }

// &:hover::after {
// width: 100%;
// }

// @media (max-width: 64em) {
// margin: 1rem 0;
// &::after {
// }
// }
// @media (max-width: 48em) {
// margin: 1rem 0;
// &::after {
// }
// }
// `;

// const HambugarMenu = styled.span`

// width: ${(props) => (props.click ? "2rem" : " 1.5rem")};
// height: 2px;
// // border:2px pink solid;
// background: ${(props) => props.theme.text};

// position: absolute;
// top: 2rem;
// left: 50%;
// transform: ${(props) =>
// props.click
// ? "translateX(-50%) rotate(90deg)"
// : "translateX(-50%) rotate(0)"};
// display: none;
// justify-content: center;
// align-items: center;
// transition: all 0.3s ease;
// cursor: pointer;

// @media (max-width: 64em) {
// display: flex;
// }

// &::after,
// &::before {
// content: " ";
// width: ${(props) => (props.click ? "1rem" : " 1.5rem")};
// height: 2px;
// right: ${(props) => (props.click ? "-2px" : "0")};
// background: ${(props) => props.theme.text};
// position: absolute;
// transition: all 0.3s ease;
// }
// &::after {
// top: ${(props) => (props.click ? "0.3rem" : " 0.5rem")};
// transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
// }
// &::before {
// bottom: ${(props) => (props.click ? "0.3rem" : " 0.5rem")};
// transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
// @media (max-width: 48em) {
// display: flex;
// }

// &::after,
// &::before {
// content: " ";
// width: ${(props) => (props.click ? "1rem" : " 1.5rem")};
// height: 2px;
// right: ${(props) => (props.click ? "-2px" : "0")};
// background: ${(props) => props.theme.text};
// position: absolute;
// transition: all 0.3s ease;
// }
// &::after {
// top: ${(props) => (props.click ? "0.3rem" : " 0.5rem")};
// transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
// }
// &::before {
// bottom: ${(props) => (props.click ? "0.3rem" : " 0.5rem")};
// transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
// }
// `;

// const Nav = () => {
// const [click, setClick] = useState(false);



// return (
// <Section id="nav">
// <Navbar>
// <Logo />
// <HambugarMenu click={click} onClick={() => setClick(!click)}>
// &nbsp;
// </HambugarMenu>
// <Menu click={click}>
// <MenuItem onClick={() => scrollTo("home")} className="">
//   Home
// </MenuItem>
// <MenuItem onClick={() => scrollTo("about")} className="">
//   About
// </MenuItem>
// <MenuItem onClick={() => scrollTo("roadmap")} className="">
//   What We Do 
// </MenuItem>

// <div className="mobile">
//   <Button link="https://www.google.com" text="Contact Us" />
// </div>
// </Menu>
// <div className="desktop">
// <Button link="https://www.google.com" text="Contact Us" />
// </div>
// </Navbar>
// </Section>
// );
// };

// export default Nav;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Logo from "./Logo";

const Navbar = () => {
  // const scrollTo = (id) => {
// let element = document.getElementById(id);

// element.scrollIntoView({
// behavior: "smooth",
// block: "start",
// inline: "nearest",
// });

// setClick(!click);
// };
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center  fixed top-0 z-20   view fadein active viewed  mini ${
        scrolled ? "black-gradient  my-0" : "bg-transparent  mt-4"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center  "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         <Logo/>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`/${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="text-red-500">
          <span className="arrow-btn md:mx-0 mx-2">
            <a href="" className="">
              Contact Us
            </a>
          </span>
        </div>
        <div className="md:flex hidden text-red-500">
          <span className="arrow-btn">
            <a href="" className="">
              Reach Us
            </a>
          </span>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;