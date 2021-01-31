import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";

// shuttle
import Shuttle from "../Shuttle";

// context
import { PageContext } from "../../context/PageContext";

const WebDevSkill = ({ skill, onSelected }) => {
  const { setClickedSkill } = useContext(PageContext);

  let shuttles = [];
  for (let i = 1; i <= skill.amount; i++) {
    shuttles.push(<Shuttle key={i} />);
  }

  return (
    <StyledSkill onClick={() => setClickedSkill(skill)}>
      <h2>{skill.title}</h2>
      <div>{shuttles}</div>
    </StyledSkill>
  );
};

export default WebDevSkill;

const StyledSkill = styled(motion.div)`
  height: 8%;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 1.25em 0em;
  h2 {
    font-size: 1.125em;
  }
`;
