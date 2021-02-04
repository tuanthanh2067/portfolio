import React from "react";
import styled from "styled-components";

const Line = ({ children }) => {
  return <StyledLine>{children}</StyledLine>;
};

export default Line;

const StyledLine = styled.div`
  width: 5px;
  height: 80%;
  background: white;
  border-radius: 24px;
  position: relative;
  margin: 0em 1.5em;
`;
