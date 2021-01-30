import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// context
import { PageContext } from "../context/PageContext";

// shuttle
import Shuttle from "./Shuttle";

const SkillPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";
  return (
    <StyledSkills
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>My skills</StyledTitle>
      <StyledTable>
        <StyledHeader>
          <Shuttle />= 3 months
        </StyledHeader>
        <StyledBody>
          <StyledSkill>
            <h2>C/C++</h2>
            <StyledShuttles>
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
            </StyledShuttles>
          </StyledSkill>
          <StyledSkill>
            <h2>Java</h2>
            <div>
              <Shuttle />
              <Shuttle />
            </div>
          </StyledSkill>
          <StyledSkill>
            <h2>Javascript</h2>
            <div>
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
            </div>
          </StyledSkill>
          <StyledSkill>
            <h2>HTML, CSS</h2>
            <div>
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
              <Shuttle />
            </div>
          </StyledSkill>
          <StyledSkill>
            <h2>ReactJs</h2>
            <div>
              <Shuttle />
              <Shuttle />
            </div>
          </StyledSkill>
          <StyledSkill>
            <h2>AngularJs</h2>
            <div>
              <Shuttle />
            </div>
          </StyledSkill>
          <StyledSkill>
            <h2>Figma</h2>
            <div>
              <Shuttle />
            </div>
          </StyledSkill>
        </StyledBody>
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
`;

const StyledBody = styled(motion.div)`
  width: 100%;
  height: 90%;
  margin: 0.5em 0em;
`;

const StyledSkill = styled.div`
  height: 13%;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: 1.125em;
  }
`;

const StyledShuttles = styled.div``;

export default SkillPage;
