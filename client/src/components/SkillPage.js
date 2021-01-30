import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// context
import { PageContext } from "../context/PageContext";

// shuttle
import Shuttle from "./Shuttle";

import WebDevSkill from "./WebDevSkill";

const SkillPage = () => {
  const { direction, clickedSkill, setClickedSkill } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  let title = (
    <>
      <Shuttle />= 3 months
    </>
  );

  let content = (
    <>
      <WebDevSkill title="C/C++" amount={6} />
      <WebDevSkill title="Java" amount={2} />
      <WebDevSkill title="Javascript" amount={5} />
      <WebDevSkill title="HTML, CSS" amount={5} />
      <WebDevSkill title="ReactJs" amount={3} />
      <WebDevSkill title="AngularJs" amount={1} />
      <WebDevSkill title="Figma" amount={1} />
    </>
  );
  const doneHandler = () => {
    setClickedSkill("");
  };

  let skilledTitle = <>{clickedSkill}</>;
  let skilledContent = (
    <StyledContent>Hello my name is {clickedSkill}</StyledContent>
  );
  let footer = <StyledDoneButton onClick={doneHandler}>Done</StyledDoneButton>;

  return (
    <StyledSkills
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>My skills</StyledTitle>
      <StyledTable>
        <StyledHeader>{clickedSkill ? skilledTitle : title}</StyledHeader>
        <StyledBody>{clickedSkill ? skilledContent : content}</StyledBody>
        {clickedSkill && footer}
      </StyledTable>
    </StyledSkills>
  );
};

const StyledSkills = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

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

export default SkillPage;
