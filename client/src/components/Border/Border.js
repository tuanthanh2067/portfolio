import styled from "styled-components";

export default function Border() {
  return (
    <div>
      <StyledTop></StyledTop>
      <StyledLeft></StyledLeft>
      <StyledBottom></StyledBottom>
      <StyledRight></StyledRight>
    </div>
  );
}

const StyledTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 100%;
  background: white;
`;

const StyledLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background: white;
`;

const StyledBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 20px;
  width: 100%;
  background: white;
`;

const StyledRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: white;
`;
