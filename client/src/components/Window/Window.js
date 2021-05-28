import { useContext } from "react";

import styled from "styled-components";

import { PageContext } from "../../context/PageContext";

const Project = ({ title, image, width, height }) => {
  const { appElement } = useContext(PageContext);

  return (
    <StyledWindow style={{ width: width, height: height }}>
      <StyledHeader>
        <StyledButtons>
          <CloseButton></CloseButton>
          <RestoreButton></RestoreButton>
          <MinimizeButton></MinimizeButton>
        </StyledButtons>
        <StyledTitle>{title}</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <img
          src={image}
          alt={title}
          onMouseOver={() => {
            console.log(appElement.current);
          }}
        ></img>
      </StyledBody>
    </StyledWindow>
  );
};

const StyledWindow = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 2.5em 0em;
  border-radius: 12px;
  overflow: hidden;
  background: black;
  @media (max-width: 600px) {
    height: 220px;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  height: 35px;
  background: #c4c4c4;
  display: flex;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
`;

const StyledButtons = styled.div`
  display: flex;
  div {
    margin: 0 0.175em;
  }
`;

const CloseButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e84545;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const RestoreButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e8a645;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const MinimizeButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2dba3b;
  @media (max-width: 450px) {
    width: 9px;
    height: 9px;
  }
`;

const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 0.85em;
  font-style: italic;
  @media (max-width: 450px) {
    font-size: 0.7em;
  }
`;

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  img {
    transition: all 0.5s ease;
    width: 100%;
  }
`;

export default Project;
