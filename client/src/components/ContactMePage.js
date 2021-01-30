import React, { useContext } from "react";
import styled from "styled-components";

// message box
import MessageBox from "./MessageBox";

// social stuff
import Social from "./Social";
import GmailImage from "../assets/icons/gmail.png";
import LinkedInImage from "../assets/icons/linkedin.png";
import GithubImage from "../assets/icons/github (2).png";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// context
import { PageContext } from "../context/PageContext";

const ContactMe = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledContainer
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>Contact me</StyledTitle>
      <MessageBox />
      <StyledOr>
        <div></div>
        <h2>or</h2>
        <div></div>
      </StyledOr>
      <StyledSocial>
        <Social
          name="linkedin"
          image={LinkedInImage}
          to="https://www.linkedin.com/in/tuan-thanh-tan-aa980419a/"
        />
        <Social
          name="gmail"
          image={GmailImage}
          to="mailto:tuanthanh2067@gmail.com"
        />
        <Social
          name="github"
          image={GithubImage}
          to="https://github.com/tuanthanh2067"
        />
      </StyledSocial>
    </StyledContainer>
  );
};

const StyledTitle = styled(motion.h1)`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

const StyledContainer = styled(motion.div)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 100%;
  & > div {
    margin: 2em;
  }
`;

const StyledOr = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    height: 1.75px;
    width: 150px;
    background: white;
  }
  h2 {
    color: white;
    margin: 0em 0.75em;
  }
`;

const StyledSocial = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default ContactMe;
