import React, { useContext } from "react";
import styled from "styled-components";

import SingleSkill from "./SingleSkill";

// animation stuff
import { motion } from "framer-motion";

// shuttle
import Shuttle from "../Shuttle/Shuttle";

// data
import skills from "./data";

// context
import { PageContext } from "../../context/PageContext";

const GeneralSkills = () => {
  const { setClickedSkill } = useContext(PageContext);

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
        {skills.map((skill) => {
          return (
            <SingleSkill
              skill={skill}
              key={skill.title}
              onSelected={setClickedSkill}
            />
          );
        })}
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
