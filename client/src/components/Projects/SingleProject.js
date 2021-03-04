import React from "react";
import styled from "styled-components";

const SingleProject = ({ project, onSelected }) => {
  return (
    <StyledProject onClick={() => onSelected(project)}>
      <StyledImg>
        <img src={project.img} alt={project.title}></img>
      </StyledImg>
      <StyledTitle>{project.title}</StyledTitle>
      <StyledSvg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </StyledSvg>
    </StyledProject>
  );
};

export default SingleProject;

const StyledProject = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid #2f3133;
  margin-top: 1.5em;
  padding-bottom: 1.5em;
`;

const StyledImg = styled.div`
  flex: 2.5;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  text-decoration: capitalize;
  flex: 8;
  color: white;
  margin-left: 0.75em;
  font-size: 1.075em;
`;

const StyledSvg = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  svg {
    fill: #cfcfcf;
  }
`;
