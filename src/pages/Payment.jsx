// import React from 'react'
import "../components/Payment.css";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
const Payment = () => {
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

    const handleNavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    menuBtn.addEventListener("click", handleMenuClick);
    navLinks.addEventListener("click", handleNavClick);

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
      navLinks.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <body>
      <nav>
        <div class="nav__bar">
          <div class="nav__header">
            <div class="nav__logo">
              <a href="#">
                Travel<span>.com</span>
              </a>
            </div>
            <div class="nav__menu__btn" id="menu-btn">
              <i class="ri-menu-line"></i>
            </div>
          </div>
          <ul class="nav__links" id="nav-links">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">BOOKING</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="body">
        <div className="container">
          <div className="contents">
            <h1>
              Payment
              <br />
              {/* Holiday */}
            </h1>
            <h4>Our Payment</h4>
            <h2>GET 20% OFF</h2>
            <h6>
              From <span>secure payment processing</span>  to adopting new technologies like
              <span>mobile payments</span> and <span>cryptocurrencies,</span> we provide comprehensive
              support every step of the way. 
            </h6>

            <p>
              We work with clients to assist them keep pace, capture and develop
              responses to the rapidly changing payments landscape
            </p>
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
    </body>
  );
};

export default Payment;
