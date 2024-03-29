import React from 'react'
import styled from 'styled-components'
import "@fontsource/akaya-telivigala";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const LogoText = styled.h1`

color: ${props=>props.theme.text};  
transition: all 0.2 ease;
img{
  width:200px;
  // height:50px;
}
&:hover{
    transform:scale(1.1);
}

@media (max-width: 64em) {
  img{
    width:100px;
  }
  // font-size: ${props=>props.theme.fontxxl};

};

`


const Logo = () => {

  const TextVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: -5,
  
      transition: {
        duration: 2,
        delay: 2,
        ease: "easeInOut",
      },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
   
       <Link to="/">
        <img 
        
        src="/new-logo.png" alt="" className='md:h-10 h-[70px]'  />
       </Link>
 
  )
}

export default Logo