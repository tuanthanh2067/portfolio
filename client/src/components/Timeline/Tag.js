import React from "react";
import styled from "styled-components";

const Tag = ({ data, onSelected }) => {
  return (
    <StyledTag style={{ top: data.top }} onClick={() => onSelected(data)}>
      {data.date}
    </StyledTag>
  );
};

export default Tag;

const StyledTag = styled.div`
  position: absolute;
  min-width: 145px;
  height: 33px;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background: #ffffff;
  font-weight: bold;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: #2e2e2e;
    color: white;
  }
  @media (max-width: 450px) {
    min-width: 120px;
    font-size: 0.65em;
  }
`;
