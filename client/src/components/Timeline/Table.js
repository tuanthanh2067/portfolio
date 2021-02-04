import React from "react";
import styled from "styled-components";

const Table = ({ position, children }) => {
  return (
    <StyledTable
      style={{
        justifyContent: position === "left" ? "flex-end" : "flex-start",
      }}
    >
      {children}
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  position: relative;
`;

export default Table;
