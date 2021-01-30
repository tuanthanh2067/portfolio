import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";

// context
import { PageContext } from "../context/PageContext";

// shuttle
import Shuttle from "./Shuttle";

const WebDevSkill = ({ title, amount }) => {
  const { setClickedSkill } = useContext(PageContext);

  let shuttles = [];
  for (let i = 1; i <= amount; i++) {
    shuttles.push(<Shuttle key={i} />);
  }

  const clickedHandler = (e) => {
    setClickedSkill(e.target.id);
  };

  return (
    <StyledSkill onClick={clickedHandler} id={title}>
      <h2>{title}</h2>
      <StyledShuttles>{shuttles}</StyledShuttles>
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
    pointer-events: none;
  }
`;

const StyledShuttles = styled.div`
  pointer-events: none;
`;
