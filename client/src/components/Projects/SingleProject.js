import React from "react";
import styled from "styled-components";

const SingleProject = ({ img, title }) => {
  return (
    <StyledProject>
      <StyledImg>
        <img src={img} alt={title}></img>
      </StyledImg>
      <StyledTitle>{title}</StyledTitle>
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
  padding-bottom: 1.5em;
  border-bottom: 1px solid #2f3133;
  margin-bottom: 1.5em;
`;

const StyledImg = styled.div`
  flex: 2.5;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
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
