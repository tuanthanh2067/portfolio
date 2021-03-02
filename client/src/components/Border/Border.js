import React from "react";
import styled from "styled-components";

const Border = ({ position, width, thickness, background }) => {
  return (
    <>
      <StyledTop
        style={{
          top: position,
          width: width,
          height: thickness,
          background: background,
        }}
      ></StyledTop>
      <StyledRight
        style={{
          right: position,
          height: width,
          width: thickness,
          background: background,
        }}
      ></StyledRight>
      <StyledBottom
        style={{
          bottom: position,
          width: width,
          height: thickness,
          background: background,
        }}
      ></StyledBottom>
      <StyledLeft
        style={{
          left: position,
          height: width,
          width: thickness,
          background: background,
        }}
      ></StyledLeft>
    </>
  );
};

const StyledTop = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledRight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledBottom = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledLeft = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export default Border;
