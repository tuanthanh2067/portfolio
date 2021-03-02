import React, { useContext } from "react";
import styled from "styled-components";

// components
import DetailedProject from "./DetailedProject";
import GeneralProjects from "./GeneralProjects";

// animation
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "../../animation";

import Table from "../Table/Table";

// context
import { PageContext } from "../../context/PageContext";

const ProjectPage = () => {
  const { direction, clickedProject } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledProjects
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>My projects</StyledTitle>
      <AnimatePresence>
        {clickedProject ? (
          <DetailedProject />
        ) : (
          <Table>
            <GeneralProjects />
          </Table>
        )}
      </AnimatePresence>
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  height: 100%;
`;

const StyledTitle = styled(motion.h1)`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

export default ProjectPage;
