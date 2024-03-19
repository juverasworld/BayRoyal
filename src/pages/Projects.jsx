// // import React, { useEffect } from 'react';
// // import { TweenMax, Expo, Power3 } from 'gsap';
// // import "../App.css"
// // // const AdidasLandingPage = () => {
// // //     useEffect(() => {
// // //         // Animation logic here
// // //         const animateElements = () => {
// // //             TweenMax.to('.first', 1.5, {
// // //                 delay: 0.2,
// // //                 left: '-100%',
// // //                 ease: Expo.easeInOut
// // //             });

// // //       TweenMax.to('.second', 1.5, {
// // //           delay: .4,
// // //           left: '-100%',
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.to('.third', 1.5, {
// // //           delay: .6,
// // //           left: '-100%',
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.from('.logo', 1, {
// // //           delay: 1,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.menu', 1, {
// // //           delay: 1.2,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.from('.search', .8, {
// // //           delay: 1.6,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.from('.bag', 1, {
// // //           delay: 1.6,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.staggerFrom('.media ul li', 1, {
// // //           delay: 2,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Power3.easeInOut
// // //       }, 0.08)

// // //       TweenMax.from('.size', 1, {
// // //           delay: 1.8,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.staggerFrom('.size ul li', .3, {
// // //           delay: 2,
// // //           opacity: 0,
// // //           y: 20,
// // //           ease: Power3.easeInOut
// // //       }, 0.08)
// // //       TweenMax.from('.bottom-right ul li:first-child', .5, {
// // //           delay: 2.4,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.bottom-right ul li:last-child', .6, {
// // //           delay: 2.4,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.bottom-img', 1, {
// // //           delay: 2.4,
// // //           opacity: 0,
// // //           x: -20,
// // //           ease: Expo.easeInOut
// // //       })

// // //       TweenMax.from('.product-title', 3, {
// // //           delay: 2.2,
// // //           opacity: 0,
// // //           y: 50,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.product-img', 1, {
// // //           delay: 4.2,
// // //           opacity: 0,
// // //           y: -800,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.product-desc p', 3, {
// // //           delay: 4.5,
// // //           opacity: 0,
// // //           y: -50,
// // //           ease: Expo.easeInOut
// // //       })
// // //       TweenMax.from('.product-desc button', 3, {
// // //           delay: 6,
// // //           opacity: 0,
// // //           y: -50,
// // //           ease: Expo.easeInOut
// // //       })
// // //         };

// // //         animateElements();

// // //         // Clean up animations on unmount
// // //         return () => {
// // //             // Ensure to clean up any ongoing animations or timers
// // //         };
// // //     }, []);

// // //     return (
// // //       <>
// // //        <div class="container">

// // // <div class="overlay first"></div>
// // // <div class="overlay second"></div>
// // // <div class="overlay third"></div>

// // // </div>
// // //       </>
// // //     );
// // // };

// // // export default AdidasLandingPage;

// // // import React from 'react';

// // const App = () => {
// //   const handleMenuClick = () => {
// //     const navLinks = document.getElementById("nav-links");
// //     navLinks.classList.toggle("open");
// //     const isOpen = navLinks.classList.contains("open");
// //     const menuBtnIcon = document.getElementById("menu-btn").querySelector("i");
// //     menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// //   };

// //   const handleCloseMenu = () => {
// //     const navLinks = document.getElementById("nav-links");
// //     navLinks.classList.remove("open");
// //     const menuBtnIcon = document.getElementById("menu-btn").querySelector("i");
// //     menuBtnIcon.setAttribute("class", "ri-menu-line");
// //   };

// //   // const scrollRevealOption = {
// //   //   distance: "50px",
// //   //   origin: "bottom",
// //   //   duration: 1000,
// //   // };

// //   // React.useEffect(() => {
// //   //   const scrollReveal = require("scrollreveal").default;
// //   //   scrollReveal().reveal(".content h1", { ...scrollRevealOption });
// //   //   scrollReveal().reveal(".content h4", { ...scrollRevealOption, delay: 500 });
// //   //   scrollReveal().reveal(".content h2, .content h6, .content form", { ...scrollRevealOption, delay: 1000 });
// //   //   scrollReveal().reveal(".content p", { ...scrollRevealOption, delay: 1500 });
// //   //   scrollReveal().reveal(".content .socials span", { ...scrollRevealOption, delay: 2000, interval: 500 });
// //   // }, []);

// //   useEffect(() => {
// //     // Animation logic here
// //     const animateElements = () => {
// //         TweenMax.to('.first', 1.5, {
// //             delay: 0.2,
// //             left: '-100%',
// //             ease: Expo.easeInOut
// //         });

// //   TweenMax.to('.second', 1.5, {
// //       delay: .4,
// //       left: '-100%',
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.to('.third', 1.5, {
// //       delay: .6,
// //       left: '-100%',
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.from('.logo', 1, {
// //       delay: 1,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.menu', 1, {
// //       delay: 1.2,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.from('.search', .8, {
// //       delay: 1.6,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.from('.bag', 1, {
// //       delay: 1.6,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.staggerFrom('.media ul li', 1, {
// //       delay: 2,
// //       opacity: 0,
// //       x: -20,
// //       ease: Power3.easeInOut
// //   }, 0.08)

// //   TweenMax.from('.size', 1, {
// //       delay: 1.8,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.staggerFrom('.size ul li', .3, {
// //       delay: 2,
// //       opacity: 0,
// //       y: 20,
// //       ease: Power3.easeInOut
// //   }, 0.08)
// //   TweenMax.from('.bottom-right ul li:first-child', .5, {
// //       delay: 2.4,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.bottom-right ul li:last-child', .6, {
// //       delay: 2.4,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.bottom-img', 1, {
// //       delay: 2.4,
// //       opacity: 0,
// //       x: -20,
// //       ease: Expo.easeInOut
// //   })

// //   TweenMax.from('.product-title', 3, {
// //       delay: 2.2,
// //       opacity: 0,
// //       y: 50,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.product-img', 1, {
// //       delay: 4.2,
// //       opacity: 0,
// //       y: -800,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.product-desc p', 3, {
// //       delay: 4.5,
// //       opacity: 0,
// //       y: -50,
// //       ease: Expo.easeInOut
// //   })
// //   TweenMax.from('.product-desc button', 3, {
// //       delay: 6,
// //       opacity: 0,
// //       y: -50,
// //       ease: Expo.easeInOut
// //   })
// //     };

// //     animateElements();

// //     // Clean up animations on unmount
// //     return () => {
// //         // Ensure to clean up any ongoing animations or timers
// //     };
// // }, []);

// //   return (

// //       <>
// //         <nav>
// //           <div className="nav__bar">
// //             <div className="nav__header">
// //               <div className="nav__logo">
// //                 <a href="#">Travel<span>.com</span></a>
// //               </div>
// //               <div className="nav__menu__btn" id="menu-btn" onClick={handleMenuClick}>
// //                 <i className="ri-menu-line"></i>
// //               </div>
// //             </div>
// //             <ul className="nav__links" id="nav-links" onClick={handleCloseMenu}>
// //               <li><a href="#">HOME</a></li>
// //               <li><a href="#">ABOUT US</a></li>
// //               <li><a href="#">BOOKING</a></li>
// //               <li><a href="#">CONTACT US</a></li>
// //             </ul>
// //           </div>
// //         </nav>
// //         <div className="container">
// //         <div class="overlay first"></div>
// //     <div class="overlay second"></div>
// //     <div class="overlay third"></div>

// //           <div className="content">
// //             <h1>Plan Your<br />Holiday</h1>
// //             <h4>Explore Worldwide</h4>
// //             <h2>GET 20% OFF</h2>
// //             <h6>Winter Voucher Code <span>TravelSafe20</span></h6>
// //             <form action="/">
// //               <input type="text" placeholder="Enter Destination" />
// //               <button><i className="ri-arrow-right-s-line"></i></button>
// //             </form>
// //             <p>
// //               We are passionate about uncovering the wonders of our diverse world
// //               and sharing them with you. Our mission is to inspire a sense of
// //               discovery, and stories that make our planet unique.
// //             </p>
// //             <div className="socials">
// //               <span>
// //                 <a href="#"><i className="ri-facebook-fill"></i></a>
// //               </span>
// //               <span>
// //                 <a href="#"><i className="ri-twitter-fill"></i></a>
// //               </span>
// //               <span>
// //                 <a href="#"><i className="ri-instagram-line"></i></a>
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //       </>

// //   );
// // };

// // export default App;

// // import React, { useState } from 'react';
// // // import ScrollReveal from 'scrollreveal';
// // // import 'remixicon/fonts/remixicon.css'; // Importing Remixicon CSS
// // import '../App.css'; // Importing custom styles

// // const App = () => {
// //   const [navOpen, setNavOpen] = useState(false);

// //   const toggleNav = () => {
// //     setNavOpen(!navOpen);
// //   };

// //   const closeNav = () => {
// //     setNavOpen(false);
// //   };

// //   // Run ScrollReveal when the component mounts
// //   React.useEffect(() => {
// //     const scrollRevealOption = {
// //       distance: '50px',
// //       origin: 'bottom',
// //       duration: 1000,
// //     };

// //     ScrollReveal().reveal('.content h1', {
// //       ...scrollRevealOption,
// //     });
// //     ScrollReveal().reveal('.content h4', {
// //       ...scrollRevealOption,
// //       delay: 500,
// //     });
// //     ScrollReveal().reveal('.content h2, .content h6, .content form', {
// //       ...scrollRevealOption,
// //       delay: 1000,
// //     });
// //     ScrollReveal().reveal('.content p', {
// //       ...scrollRevealOption,
// //       delay: 1500,
// //     });
// //     ScrollReveal().reveal('.content .socials span', {
// //       ...scrollRevealOption,
// //       delay: 2000,
// //       interval: 500,
// //     });
// //   }, []); // Empty dependency array to run this effect only once

// //   return (
// //     <div>
// //       <nav>
// //         <div className="nav__bar">
// //           <div className="nav__header">
// //             <div className="nav__logo">
// //               <a href="#">Travel<span>.com</span></a>
// //             </div>
// //             <div className="nav__menu__btn" id="menu-btn" onClick={toggleNav}>
// //               <i className={navOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
// //             </div>
// //           </div>
// //           <ul className={navOpen ? 'nav__links open' : 'nav__links'} id="nav-links">
// //             <li><a href="#" onClick={closeNav}>HOME</a></li>
// //             <li><a href="#" onClick={closeNav}>ABOUT US</a></li>
// //             <li><a href="#" onClick={closeNav}>BOOKING</a></li>
// //             <li><a href="#" onClick={closeNav}>CONTACT US</a></li>
// //           </ul>
// //         </div>
// //       </nav>
// //       <div className="container">
// //         <div className="content">
// //           <h1>Plan Your<br />Holiday</h1>
// //           <h4>Explore Worldwide</h4>
// //           <h2>GET 20% OFF</h2>
// //           <h6>Winter Voucher Code <span>TravelSafe20</span></h6>
// //           <form action="/">
// //             <input type="text" placeholder="Enter Destination" />
// //             <button><i className="ri-arrow-right-s-line"></i></button>
// //           </form>
// //           <p>
// //             We are passionate about uncovering the wonders of our diverse world
// //             and sharing them with you. Our mission is to inspire a sense of
// //             discovery, and stories that make our planet unique.
// //           </p>
// //           <div className="socials">
// //             <span>
// //               <a href="#"><i className="ri-facebook-fill"></i></a>
// //             </span>
// //             <span>
// //               <a href="#"><i className="ri-twitter-fill"></i></a>
// //             </span>
// //             <span>
// //               <a href="#"><i className="ri-instagram-line"></i></a>
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// // import React from 'react'
// // import "../App.css"
// // const projects = () => {
// //   return (
// //     <div className="body">

// //     <div className="container">
// //     <div className="content">
// //       <h1>Plan Your<br />Holiday</h1>
// //       <h4>Explore Worldwide</h4>
// //       <h2>GET 20% OFF</h2>
// //       <h6>Winter Voucher Code <span>TravelSafe20</span></h6>
// //       <form action="/">
// //         <input type="text" placeholder="Enter Destination" />
// //         <button><i className="ri-arrow-right-s-line"></i></button>
// //       </form>
// //       <p>
// //         We are passionate about uncovering the wonders of our diverse world
// //         and sharing them with you. Our mission is to inspire a sense of
// //         discovery, and stories that make our planet unique.
// //       </p>
// //       <div className="socials">
// //         <span>
// //           <a href="#"><i className="ri-facebook-fill"></i></a>
// //         </span>
// //         <span>
// //           <a href="#"><i className="ri-twitter-fill"></i></a>
// //         </span>
// //         <span>
// //           <a href="#"><i className="ri-instagram-line"></i></a>
// //         </span>
// //       </div>
// //     </div>
// //   </div>
// //     </div>

// //   )
// // }

// // export default projects

// import React from "react";
// import "../components/Project.css";

// const projects = () => {
//   return (
//     <>
// {/*      
//         <div className="body bg-black text-white">
//           <div className="container">
//             <div className="content">
//               <h1>
//                 Plan Your
//                 <br />
//                 Holiday
//               </h1>
//               <h4>Explore Worldwide</h4>
//               <h2>GET 20% OFF</h2>
//               <h6>
//                 Winter Voucher Code <span>TravelSafe20</span>
//               </h6>
//               <form action="/">
//                 <input type="text" placeholder="Enter Destination" />
//                 <button>
//                   <i className="ri-arrow-right-s-line"></i>
//                 </button>
//               </form>
//               <p>
//                 We are passionate about uncovering the wonders of our diverse
//                 world and sharing them with you. Our mission is to inspire a
//                 sense of discovery, and stories that make our planet unique.
//               </p>
//             </div>
//           </div>
//         </div> */}
      
//     </>
//   );
// };

// export default projects;
