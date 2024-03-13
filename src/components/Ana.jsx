import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/variants";
import MainVideo from "../assets/heraa.mp4";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(/hero.mp4);
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 64em) {
    height: 150vh;
    video {
        width: 100%;
        height: 150vh;
        object-fit: cover;
      }
  @media (max-width: 48em) {
    height: 150vh;
    video {
        width: 150%;
        height: 150vh;
        object-fit: cover;
      }
   
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

  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  color: ${(props) => props.theme.text};

  //   div {
  //     display: flex;
  //     flex-direction: row;
  //   }

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

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };
const CoverVideo = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
  
    useLayoutEffect(() => {
      let element = ref.current;
      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
  
      return () => {
        ScrollTrigger.kill();
      };
    }, []);
  return (
    <VideoContainer ref={ref}>
      <DarkOverlay />
      <Title variants={conatiner} initial="hidden" animate="show">
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap xl:mx-44 lg:mx-10 mx-2 mt-24">
            <div
              // variants={items}
              // initial="hidden"
              // animate="visible"
              className="w-full  md:w-1/2  relative lg:w-1/3 p-4   "
            >
              <motion.div
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
                className="border-[1px] rounded-[10px] p-4 h-[267px] o"
              >
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="font-semibold  text-[20px]   my-5"
                >
                  Project
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="my-5  text-[#4C4C4C]    "
                >
                  We deliver all projects using international best practices,
                  timely and within industry matched budgets
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="mt-3 mb-2 absolute bottom-5"
                >
                  <svg
                    width="45"
                    height="57"
                    viewBox="0 0 70 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5058_9607)">
                      <path
                        d="M19.2771 23.5229C25.7231 23.5229 30.9487 18.2973 30.9487 11.8513C30.9487 5.40524 25.7231 0.179688 19.2771 0.179688C12.831 0.179688 7.60547 5.40524 7.60547 11.8513C7.60547 18.2973 12.831 23.5229 19.2771 23.5229Z"
                        fill="#9CDCD9"
                      />
                      <path
                        d="M0.5 38.5977C0.5 33.0748 4.97715 28.5977 10.5 28.5977H28.0522C33.5751 28.5977 38.0522 33.0748 38.0522 38.5977V54.0006C38.0522 55.1052 37.1568 56.0006 36.0522 56.0006H2.5C1.39543 56.0006 0.5 55.1052 0.5 54.0006V38.5977Z"
                        fill="#0E5C2A"
                      />
                      <path
                        d="M22.5 38.48L30.3378 46L46.5 29"
                        stroke="#9CDCD9"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5058_9607">
                        <rect
                          width="69"
                          height="57"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </motion.div>
            </div>
            <div className="w-full  md:w-1/2  relative lg:w-1/3 p-4  ">
              <motion.div
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
                className="border-[1px] rounded-[10px] p-4 h-[267px] o"
              >
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="font-semibold  text-[20px]   my-5"
                >
                  Payments
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="my-5  text-[#4C4C4C]    "
                >
                  We work with clients to assist them keep pace, capture and
                  develop responses to the rapidly changing payments landscape
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="mt-3 mb-2 absolute bottom-5"
                >
                  <svg
                    width="25"
                    height="53"
                    viewBox="0 0 40 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.166992"
                      width="39"
                      height="53"
                      rx="4"
                      fill="#0E5C2A"
                    />
                    <rect
                      x="4.16699"
                      y="6"
                      width="31"
                      height="6"
                      rx="3"
                      fill="#F1F1F1"
                    />
                    <rect
                      x="4.16699"
                      y="14"
                      width="25"
                      height="6"
                      rx="3"
                      fill="#F1F1F1"
                    />
                    <path
                      d="M19.3386 47.3432C22.1948 47.3432 24.5102 45.0278 24.5102 42.1716C24.5102 39.3154 22.1948 37 19.3386 37C16.4824 37 14.167 39.3154 14.167 42.1716C14.167 45.0278 16.4824 47.3432 19.3386 47.3432Z"
                      fill="#9CDCD9"
                    />
                  </svg>
                </motion.p>
                
              </motion.div>
            </div>
            <div className="w-full  md:w-1/2  relative lg:w-1/3 p-4  ">
              <motion.div
                variants={item}
                data-scroll
                data-scroll-delay="0.13"
                data-scroll-speed="4"
                className="border-[1px] rounded-[10px] p-4 h-[267px]"
              >
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="font-semibold  text-[20px]   my-2"
                >
                  Payroll
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="my-2   text-[#4C4C4C]    "
                >
                  We offer employee management services using a professionally
                  certified HR team for indigenous and multinational clients
                  across varied sectors.
                </motion.p>
                <motion.p
                  data-scroll
                  data-scroll-delay="0.2"
                  data-scroll-speed="2"
                  className="mt-3 mb-2 absolute bottom-5 "
                >
                  <svg
                    width="45"
                    height="46"
                    viewBox="0 0 82 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5058_9339)">
                      <path
                        d="M11.2055 46.0009C16.9341 46.0009 21.578 41.3569 21.578 35.6284C21.578 29.8998 16.9341 25.2559 11.2055 25.2559C5.47693 25.2559 0.833008 29.8998 0.833008 35.6284C0.833008 41.3569 5.47693 46.0009 11.2055 46.0009Z"
                        fill="#9CDCD9"
                      />
                      <path
                        d="M29.2459 45.9996C38.4615 45.9996 45.9322 38.5288 45.9322 29.3133C45.9322 20.0977 38.4615 12.627 29.2459 12.627C20.0303 12.627 12.5596 20.0977 12.5596 29.3133C12.5596 38.5288 20.0303 45.9996 29.2459 45.9996Z"
                        fill="#F9DA70"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0138 25.4121C17.8789 26.2688 21.5753 30.5163 21.5753 35.6271C21.5753 38.2531 20.5994 40.6512 18.9906 42.4785C15.0742 39.425 12.5557 34.6624 12.5557 29.3116C12.5557 27.9688 12.7143 26.6631 13.0138 25.4121Z"
                        fill="#0E5C2A"
                      />
                      <path
                        d="M58.1064 46C70.809 46 81.1064 35.7025 81.1064 23C81.1064 10.2975 70.809 0 58.1064 0C45.4039 0 35.1064 10.2975 35.1064 23C35.1064 35.7025 45.4039 46 58.1064 46Z"
                        fill="#0E5C2A"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M42.3027 39.7074C37.8735 35.5152 35.1104 29.5805 35.1104 23.0005C35.1104 19.9651 35.6984 17.0671 36.7667 14.4141C42.2052 17.1639 45.9339 22.8036 45.9339 29.3143C45.9339 33.2439 44.5756 36.8563 42.3027 39.7074Z"
                        fill="#9CDCD9"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5058_9339">
                        <rect
                          width="81"
                          height="46"
                          fill="white"
                          transform="translate(0.833008)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
