import { motion } from "framer-motion";
import React, { useContext } from "react";

import styled from "styled-components";

// context
import { PageContext } from "../../context/PageContext";

const DetailedSkills = () => {
  const { clickedSkill, setClickedSkill } = useContext(PageContext);

  return (
    <StyledContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StyledHeader>{clickedSkill.title}</StyledHeader>
      <StyledBody>
        <StyledContent>
          Hello {clickedSkill.title} and {clickedSkill.description}
        </StyledContent>
      </StyledBody>
      <StyledDoneButton onClick={() => setClickedSkill(null)}>
        Done
      </StyledDoneButton>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.p`
  color: white;
`;

const StyledDoneButton = styled.div`
  background: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
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

export default DetailedSkills;
