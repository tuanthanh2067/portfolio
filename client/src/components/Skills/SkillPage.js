import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "../../animation";

// context
import { PageContext } from "../../context/PageContext";

import DetailedSkill from "./DetailedSkill";
import GeneralSkills from "./GeneralSkills";

const SkillPage = () => {
  const { direction, clickedSkill } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledSkills
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>My skills</StyledTitle>
      <StyledTable>
        <AnimatePresence>
          {clickedSkill ? <DetailedSkill /> : <GeneralSkills />}
        </AnimatePresence>
      </StyledTable>
    </StyledSkills>
  );
};

const StyledSkills = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

const StyledTable = styled.div`
  width: 30%;
  height: 80%;
  background: #18191a;
  margin: 2em auto;
  border-radius: 36px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    width: 40%;
  }

  @media (max-width: 1100px) {
    width: 55%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export default SkillPage;
