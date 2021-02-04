import React from "react";
import styled from "styled-components";

const Dot = ({ top }) => {
  return <StyledDot style={{ top: top }}></StyledDot>;
};

export default Dot;

const StyledDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  left: 50%;
  transform: translate(-50%, 100%);
  cursor: pointer;
`;
