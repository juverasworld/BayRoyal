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
import {Route, Routes} from 'react-router-dom';
import Projects from "./pages/Projects";
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
import Load from "./components/Loader";
import Loader from "./components/Loader";



function App() {
  const containerRef = useRef(null);
  return (
    <>

<Routes>
       <Route path='/' element={<Loader/>}/>
       <Route path='/Projects' element={<Projects/>}/>
       {/* <Route path='/services' element={<OurService/>}/> */}
   </Routes>
         
      {/* <GlobalStyles />
      <ThemeProvider theme={light}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            
          }}
          watch={
            [
             
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
              
              <div id="contact"> 

              <Footer />
              </div>
              </div>
              <ScrollToTop />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider> */}
    </>
  );
}

export default App;
