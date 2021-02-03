import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// context
import { PageContext } from "../../context/PageContext";

const Timeline = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledTimeline
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>Timeline</StyledTitle>
    </StyledTimeline>
  );
};

const StyledTimeline = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

export default Timeline;
