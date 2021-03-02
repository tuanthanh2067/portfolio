import React from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";

// data
import projects from "./data";

const GeneralProjects = () => {
  console.log(projects);
  return (
    <StyledGeneralProjects>
      {projects.map((project) => (
        <SingleProject
          img={project.img}
          title={project.title}
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
