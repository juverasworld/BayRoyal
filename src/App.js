import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Themes";
import Nav from "./components/Nav";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Roadmap from "./components/section/Roadmap";
import Showcase from "./components/section/Showcase";
import Footer from "./components/Footer";
import Team from "./components/section/Team";
import Faq from "./components/section/Faq";
import ScrollToTop from "./components/ScrollToTop";
import Mab from "./components/Mab";
import { motion } from "framer-motion";
// import { slideIn } from "../../utils/motion";
// import { ThemeProvider } from "styled-components";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import Home from "./section/HOme";
import { AnimatePresence } from "framer-motion";

import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Hero from "./components/Comp";
import Ana from "./components/Ana";
// function App() {
//   return (
//   <>
//    <GlobalStyles/>

//  <ThemeProvider theme={light}>

//  <Nav/>
//  <Mab/>
//  <About/>
//  <Roadmap/>
//  {/* <Showcase/>
//  <Team/> */}
//  <Faq/>
//  <Footer/>
//  <ScrollToTop/>
//  </ThemeProvider>
//         </>
//   );
// }

// import Banner from "./section/Banner";
// import NewArrival from "./section/NewArrival";

function App() {
  const containerRef = useRef(null);
  return (
    <>
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
            {/* <Loader/> */}
            <main className="relative app z-0 black-gradient" data-scroll-container ref={containerRef}>
              <div className="bg-cover bg-no-repeat bg-center">

              <Nav />
              <Mab />
              <About />
              <div>
               
               <Ana/>

              </div>
              <div />
              {/* <Hero/> */}
              {/* <Roadmap /> */}
              {/* <Showcase/>
 <Team/> */}
              {/* <Faq /> */}
              <Footer />
              </div>
              <ScrollToTop />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
