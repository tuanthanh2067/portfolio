import React from "react";
import styled from "styled-components";

const Tag = ({ top, children }) => {
  return <StyledTag style={{ top: top }}>{children}</StyledTag>;
};

export default Tag;

const StyledTag = styled.div`
  position: absolute;
  min-width: 150px;
  height: 30px;
  display: flex;
  font-size: 0.95em;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background: #ffffff;
  font-weight: bold;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #d4d4d4;
  }
`;