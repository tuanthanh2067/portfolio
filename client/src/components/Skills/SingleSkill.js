import React from "react";
import styled from "styled-components";

// shuttle
import Shuttle from "../Shuttle/Shuttle";

const WebDevSkill = ({ skill, onSelected }) => {
  let shuttles = [];
  for (let i = 1; i <= skill.amount; i++) {
    shuttles.push(<Shuttle key={i} />);
  }

  return (
    <StyledSkill onClick={() => onSelected(skill)}>
      <h2>{skill.title}</h2>
      <div>{shuttles}</div>
    </StyledSkill>
  );
};

export default WebDevSkill;

const StyledSkill = styled.div`
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #2f3133;
  cursor: pointer;
  margin-top: 1.35em;
  padding-bottom: 1.35em;
  h2 {
    font-size: 1.125em;
    margin-right: 0.45em;
  }

  div {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 1.05em;
    }
  }
`;
