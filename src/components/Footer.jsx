// import React from "react";
// import styled from "styled-components";
// import Banner from "./Banner";
// import Logo from "./Logo";
// import Twitter from "../Icons/Twitter";

// import Instagram from "../Icons/Instagram";
// import Facebook from "../Icons/Facebook";
// import LinkedIn from "../Icons/LinkedIn";

// const Section = styled.section`
//   min-height: 100vh;
//   height:100vh
//   width: 100%;
//   background-color: ${(props) => props.theme.body};
//   color: ${(props) => props.theme.text};
//   position: relative;
//   display: flex;

//   flex-direction: column;
// `;

// const Container = styled.div`
//   width: 75%;
//   margin: 2rem auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   border-bottom: 1px solid ${(props) => props.theme.text};

//   @media (max-width: 48em) {
//     width: 90%;

//     h1{
//    font-size: ${(props) => props.theme.fontxxl};

//     }
//   }
// `;

// const Left = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   justify-content: center;
//   @media (max-width: 48em) {
//     width: 100%;
//   }
// `;

// const IconList = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 1rem auto;

//   & > * {
//     padding-right: 0.5rem;
//     transition: all 0.2s ease;

//     &:hover {
//       transform: scale(1.2);
//     }
//   }
// `;

// const MenuItems = styled.ul`
//   list-style: none;
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   grid-gap: 1rem;
//   @media (max-width: 48em) {
//     display: none;
//   }
// `;
// const Item = styled.li`
//   width: fit-content;
//   cursor: pointer;

//   &::after {
//     content: " ";
//     display: block;
//     width: 0%;
//     height: 2px;
//     background: ${(props) => props.theme.text};
//     transition: width 0.3s ease;
//   }

//   &:hover::after {
//     width: 100%;
//   }
// `;

// const Bottom = styled.div`
//   width: 75%;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   a {
//     text-decoration: underline;
//   }
//   @media (max-width: 48em) {
//     flex-direction: column;
//     width: 100%;
//     span {
//       margin-bottom: 1rem;
//     }
//   }
// `;
// const Footer = () => {
//   const scrollTo = (id) => {
//     let element = document.getElementById(id);

//     element.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest",
//     });
//   };
//   return (
//     <Section>
//       <Banner />
//       <Container>
//         <Left>
//           <Logo />
//           <IconList>
//             <a
//               href="https://www.linkedin.com/obasi-vera-a8b155198"
//               target={"_blank"}
//               rel="noopener"
//             >
//               <LinkedIn />
//             </a>
//             <a
//               href="https://twitter.com/Vera_Ifebuche"
//               target={"_blank"}
//               rel="noopener"
//             >
//               <Twitter />
//             </a>
//             <a href="https://facebook.com" target={"_blank"} rel="noopener">
//               <Facebook />
//             </a>
//             <a href="https://Instagram.com" target={"_blank"} rel="noopener">
//               <Instagram />
//             </a>
//             <a href="https://facebook.com" target={"_blank"} rel="noopener">
//               <Facebook />
//             </a>
//           </IconList>
//         </Left>
//         <MenuItems>
//           <Item onClick={() => scrollTo("home")} className="py-1">
//             Home{" "}
//           </Item>
//           <Item onClick={() => scrollTo("about")} className="py-1">
//             About{" "}
//           </Item>
//           <Item onClick={() => scrollTo("roadmap")} className="py-1">
//            What We Do
//           </Item>
//           <Item onClick={() => scrollTo("showcase")} className="py-1">
//           Contact Us
//           </Item>
//           {/* <Item onClick={() => scrollTo("team")} className="py-1">
//             Team
//           </Item>
//           <Item onClick={() => scrollTo("faq")} className="py-1">
//             Faq
//           </Item> */}
//         </MenuItems>
//       </Container>
//       <Bottom>
//         <span>
//           $copy; {new Date().getFullYear()} Weirdos CLub. All right reserved.
//         </span>
//         <span>
//           Made with &#10084; by
//           <a
//             href=" https://vera-black.vercel.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             {" "}
//             Vee
//           </a>
//         </span>
//       </Bottom>
//     </Section>
//   );
// };

// export default Footer;

import React from "react";
import Twitter from "../Icons/Twitter";
import Phone from "../assets/phone.png";
// import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import LinkedIn from "../Icons/LinkedIn";
import Gmail from "../Icons/Gmail";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div>
      <div className="bg-gradient py-24 text-white">
        <footer className="py-1">
          <div className="flex items-center justify-between md:mx-10 mx-3 flex-col lg:flex-row px-4">
            <p className="py-1">
              <Logo />
            </p>
            <p className="py-1">Address</p>
            <p className="py-1">Reach Us</p>
          </div>
          <div className="flex items-center justify-between flex-col lg:flex-row px-4">
            <div className="flex md:flex-row flex-col items-center justify-center ">
              <div className="lg:mx-10 mx-3 md:w-1/3 w-full">
                Bay Royal International Limited: Your trusted partner for
                business success. We excel in tailored solutions, innovation,
                and client-centricity, ensuring excellence in payments,
                projects, payroll, and P.E.O. services.
              </div>
              <div className="lg:mx-5 mx-0">
                <div className="flex flex-col">
                  <p className="py-1">
                    6b Bendel Close, Victoria Island, Lagos.
                  </p>
                  <p>P: +234 803 912 3546</p>
                </div>
                <div className="py-1">
                  <p>Abuja: 22 Kumasi Crescent, Wuse 2.</p>
                  <p>P: +234 806 912 6543</p>
                </div>
                <div className="py-1">
                  <p className="py-1">
                    Accra: Regus Building, 5 Roman Road, Off Borstal Ave Lane.
                  </p>
                  <p className="py-1">P: +233 541 604 192</p>
                </div>
                <div className="py-1">
                  <p className="py-1">
                    Nairobi: Windsor House, University way,
                  </p>
                  <p className="py-1">Muindi Mbugu Street, Nairobi, Kenya.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row  items-center space-x-4">
              <a
                href="https://www.facebook.com/BayRoyalLtd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-5 px-5 border-[1px] border-whitehover:text-gray-900"
              >
                <Facebook />
              </a>
              <a
                href="https://linkedin.com/company/bayroyal-international-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-5 px-5 border-[1px] border-whitehover:text-gray-900"
              >
                <LinkedIn />
              </a>

              <a
                href="peter@bayroyalinternational.com"
                className="text-white py-5 px-5 border-[1px] border-whitehover:text-gray-900"
              >
                <Gmail />
              </a>
              <a
                href="tel:+2348039123546"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-5 px-5 border-[1px] border-whitehover:text-gray-900"
              >
                <img src={Phone} alt="" className="bg-white w-auto" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
