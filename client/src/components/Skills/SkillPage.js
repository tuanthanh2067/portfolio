import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "../../animation";

import Table from "../Table/Table";

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
      <Table>
        <AnimatePresence>
          {clickedSkill ? <DetailedSkill /> : <GeneralSkills />}
        </AnimatePresence>
      </Table>
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

export default SkillPage;
