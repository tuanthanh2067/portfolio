import React from "react";
import styled from "styled-components";

import WebDevSkill from "./WebDevSkill";

// animation stuff
import { motion } from "framer-motion";

// shuttle
import Shuttle from "../Shuttle";

const GeneralSkills = () => {
  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledHeader>
        <Shuttle />= 3 months
      </StyledHeader>
      <StyledBody>
        <WebDevSkill title="C/C++" amount={6} />
        <WebDevSkill title="Java" amount={2} />
        <WebDevSkill title="Javascript" amount={5} />
        <WebDevSkill title="HTML, CSS" amount={5} />
        <WebDevSkill title="ReactJs" amount={3} />
        <WebDevSkill title="AngularJs" amount={1} />
        <WebDevSkill title="Figma" amount={1} />
      </StyledBody>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25em;
  font-weight: bold;
`;

const StyledBody = styled.div`
  width: 100%;
  height: 90%;
  margin: 0.5em 0em;
`;

export default GeneralSkills;
