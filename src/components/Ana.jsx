import { fadeIn, textVariant } from "../utils/motion";

import mainVideo from "../assets/hera.mp4"
import React from 'react'
import { motion } from "framer-motion";

const Ana = () => {
  return (
    <div>
         <motion.div variants={textVariant()} className=" lg:mt-[-170px] mt-10">
      <div className="video-wrap">
              <video
                width="1300"
                height="730"
                data-normal="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
                data-retina="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_low1.mp4"
                data-small="https://phenomenonstudio.com/wp-content/uploads/2022/09/Reel_New_Preview_mobile.mp4"
                className="view fadein delay0-7 active viewed"
                // id="main-video"
                muted
               
                loop
                autoPlay
                playsInline
                src={mainVideo}
                type='video/mp4'
                style={{ visibility: "visible" }}
              ></video>
            </div>
          
      </motion.div>
    </div>
  )
}

export default Ana