import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import SingleProject from "./SingleProject";

// data
import projects from "./data";

// context
import { PageContext } from "../../context/PageContext";

const GeneralProjects = () => {
  const { setClickedProject } = useContext(PageContext);
  return (
    <StyledGeneralProjects
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projects.map((project) => (
        <SingleProject
          project={project}
          onSelected={setClickedProject}
          key={project.title}
        />
      ))}
    </StyledGeneralProjects>
  );
};

const StyledGeneralProjects = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export default GeneralProjects;
