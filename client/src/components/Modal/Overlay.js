import React from "react";
import styled from "styled-components";

const Overlay = ({ onSelected }) => {
  return <StyledOverlay onClick={onSelected}></StyledOverlay>;
};

export default Overlay;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.9);
`;
