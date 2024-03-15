import React, { useEffect } from 'react';
// import Bg from "../assets/bg.avif"
// import './style.css'; // Make sure to import your CSS file
import { StarsCanvas } from '../components/canvas';
import { TweenMax, Power2, Power3 } from 'gsap';
import Nav from "../components/Nav"
const PhotographerPortfolio = () => {
  useEffect(() => {
    TweenMax.to('.left', 2, {
      delay: 0.8,
      width: '50%',
      ease: Power2.easeInOut,
    });

    TweenMax.to('.right', 2, {
      delay: 0.6,
      width: '50%',
      ease: Power3.easeInOut,
    });
  }, []);

  return (

    
    <div className="wrapper">
      <div className="left"></div>
      <div className="right"></div>

      <Nav/>

      <div className="content">
        <div className="img-wrapper bg-[url('./assets/bg.avif')]">
          <div className="karina"></div>
        </div>

        {/* <div className="info lg:w-auto w-full">
          <ul className='flex w-full'>
            <li>unsplash.com</li>
            <li>@karinates</li>
            <li>karinates.com</li>
            <li>
              <i className="fa fa-share-alt"></i>
            </li>
          </ul>
        </div> */}

        <div className="text lg:text-left text-center">
          <h1>karina tes</h1>
          <p className='md:text-left text-center'>Fashion Photographer</p>

          <StarsCanvas/>
        </div>

        <div className="name">karina tes</div>

        <div className="bottomnav ">
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero delectus recusandae voluptatibus! Sed dolores nam nesciunt consectetur aliquid omnis illum cupiditate quaerat quisquam hic minima neque, itaque totam possimus quod!</p>
        </div>
      </div>
    </div>
  );
};

export default PhotographerPortfolio;
