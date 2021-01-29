import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { pageAnimation } from "../animation";

// context
import { PageContext } from "../context/PageContext";

const IntroPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledText
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledName>
        Hi, My name is{" "}
        <SplitText
          styled={{ color: "#23d997", display: "inline-block" }}
          initial={{ opacity: 0 }}
          animate="visible"
          variants={{
            visible: (i) => ({
              opacity: 1,
              transition: {
                delay: i * 0.75,
              },
            }),
          }}
        >
          Thanh
        </SplitText>
      </StyledName>
      <StyledIntro>I'm a web developer</StyledIntro>
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

  div:hover {
    color: white;
  }
`;

const StyledIntro = styled(motion.h1)`
  font-size: 1.25em;
  overflow: hidden;
  color: white;
`;

export default IntroPage;
