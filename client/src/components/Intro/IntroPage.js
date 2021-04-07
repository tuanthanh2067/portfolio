import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import SplitText from "../SplitText";
import { pageAnimation } from "../../animation";

// border comp
import Border from "../Border/Border";

// context
import { PageContext } from "../../context/PageContext";

const IntroPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2.25,
        staggerChildren: 1.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <StyledText
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <Border position="10%" width="80%" thickness="3px" background="white" />
      <StyledName>
        Hello, My name is{" "}
        <SplitText
          styled={{ color: "#23d997", display: "inline-block" }}
          initial={{ opacity: 0 }}
          animate="visible"
          variants={{
            visible: (i) => ({
              opacity: 1,
              transition: {
                delay: i * 0.15,
              },
            }),
          }}
        >
          Tuan Thanh Tan
        </SplitText>
      </StyledName>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ textAlign: "center" }}
      >
        <StyledIntro variants={item}>
          I'm studying at Seneca College
        </StyledIntro>
        <StyledIntro variants={item}>
          I've always loved computer since I was a child
        </StyledIntro>
        <StyledIntro variants={item}>
          Imagine creating loads of amazing websites that people enjoy using
        </StyledIntro>
        <StyledIntro variants={item}>
          I'm currently working on a live-streaming app and live chat app
        </StyledIntro>
        <StyledIntro variants={item}>
          Hope I can get it done before I graduate LOL
        </StyledIntro>
        <StyledIntro variants={item}>
          Move to next pages to explore more!
        </StyledIntro>
        <StyledIntro variants={item}>Thank youuu!</StyledIntro>
      </motion.div>
    </StyledText>
  );
};

const StyledText = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledName = styled(motion.h1)`
  color: white;
  overflow: hidden;
  text-align: center;

  div:hover {
    color: white;
  }

  @media (max-width: 520px) {
    font-size: 1.45em;
  }

  @media (max-width: 450px) {
    font-size: 1.3em;
  }
`;

const StyledIntro = styled(motion.div)`
  font-size: 1.1em;
  margin: 0.5em 0em;
  overflow: hidden;
  color: white;
  @media (max-width: 1000px) {
    font-size: 0.9em;
  }
  @media (max-width: 520px) {
    font-size: 0.85em;
  }
  @media (max-width: 450px) {
    font-size: 0.8em;
    margin: 1em 0em;
  }
`;

export default IntroPage;
