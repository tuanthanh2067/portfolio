import React, { useContext } from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";

// data
import projects from "./data";

// context
import { PageContext } from "../../context/PageContext";

const GeneralProjects = () => {
  const { setClickedProject } = useContext(PageContext);
  return (
    <StyledGeneralProjects>
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

const StyledGeneralProjects = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GeneralProjects;
