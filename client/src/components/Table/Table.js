import React from "react";
import styled from "styled-components";

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;

const StyledTable = styled.div`
  width: 30%;
  height: 80%;
  background: #18191a;
  margin: 2em auto;
  border-radius: 36px;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1400px) {
    width: 40%;
  }

  @media (max-width: 1100px) {
    width: 55%;
  }
  @media (max-width: 800px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
