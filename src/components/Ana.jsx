// import { fadeIn, textVariant } from "../utils/motion";

// import mainVideo from "../assets/hera.mp4"
// import React from 'react'
// import { motion } from "framer-motion";

// const Ana = () => {
//   return (
//     <div>
//          <motion.div variants={textVariant()} className=" lg:mt-[-170px] mt-10">
//       <div className="video-wrap">
//               <video
//                 width="1300"
//                 height="730"
//                 data-normal="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
//                 data-retina="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
//                 data-small="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_mobile.mp4"
//                 className="view fadein delay0-7 active viewed"
//                 // id="main-video"
//                 muted

//                 loop
//                 autoPlay
//                 playsInline
//                 src={mainVideo}
//                 type='video/mp4'
//                 style={{ visibility: "visible" }}
//               ></video>
//             </div>

//       </motion.div>
//     </div>
//   )
// }

// export default Ana

import { useState, useEffect } from "react";
// import { styles } from "./styles";
import { fadeIn, textVariant } from "../utils/motion";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MainVideo from "../assets/hera.mp4";

const VideoContainer = styled.section`
  width: 100%;
//   height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.2)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

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
const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      {/* <Title variants={conatiner} initial="hidden" animate="show">
      
          
      </Title> */}
      <div className="bg-cover bg-no-repeat bg-center">
        <motion.div variants={fadeIn("up", "spring")} className="">
          <div className="flex items-center justify-center lg:flex-row flex-col my-16 ">
            <div className="px-5">
              <div className="image-container">
                <img className="img" src="/bighead.svg" alt="" />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="text-[28px] leading-7 font-bold">
                  Rapida- Branding for <br className="md:flex hidden" />{" "}
                  personal homes
                </p>
                <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
                  See more
                </button>
              </div>
              <div className="">
                <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                  branding
                </button>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="px-5 lg:mt-[-6%] mt-2">
              <div className="image-container">
                <img
                  className="img hover:-translate-y-1 hover:scale-100 duration-300 leading-[28px] py-6 px-8 rounded-xl"
                  src="/bighead.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="text-[28px] leading-7 font-bold">
                  Rapida- Branding for <br className="md:flex hidden" />{" "}
                  personal homes
                </p>
                <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
                  See more
                </button>
              </div>
              <div className="">
                <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                  branding
                </button>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quis{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:flex-row flex-col my-16 ">
            <div className="px-5">
              <div className="image-container">
                <img className="img" src="/bighead.svg" alt="" />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="text-[28px] leading-7 font-bold">
                  Rapida- Branding for <br className="md:flex hidden" />{" "}
                  personal homes
                </p>
                <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
                  See more
                </button>
              </div>
              <div className="">
                <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                  branding
                </button>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
            </div>
            <div className="px-5 lg:mt-[-6%] mt-2">
              <div className="image-container">
                <img className="img" src="/bighead.svg" alt="" />
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="text-[28px] leading-7 font-bold">
                  Rapida- Branding for <br className="md:flex hidden" />{" "}
                  personal homes
                </p>
                <button className="bg-black rounded-[24px] px-5 py-2 text-white whitespace-nowrap ">
                  See more
                </button>
              </div>
              <div className="">
                <button className="bg-gray-100 rounded-[24px] px-5 py-1 text-black ">
                  branding
                </button>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates quis{" "}
                </p>
              </div>
            </div>
          </div>
         

          <div className="my-24 items-center flex justify-center text-slide ">
            <a href="" className="circle-btn black">
              <span className="flex items-center hover-effect bg-[#f2751a] justify-center h-[180px] w-[180px] rounded-full">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 0L11 5.5L5.5 11L4.67022 10.1702L8.7537 6H0V5H8.7537L4.67022 0.829781L5.5 0Z"
                    fill="#1F2122"
                  ></path>
                </svg>
                All projects
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
