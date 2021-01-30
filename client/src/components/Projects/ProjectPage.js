import React, { useContext } from "react";
import styled from "styled-components";

import Project from "./Project";

// images
import imageLibrary from "../../assets/images/image-library.jpg";
import gameLibrary from "../../assets/images/game-library.jpg";
import vacation from "../../assets/images/airbnb-clone.jpg";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// context
import { PageContext } from "../../context/PageContext";

const ProjectPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledProjects
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>My projects</StyledTitle>
      <StyledGrid>
        <Project
          title="Game Library"
          image={gameLibrary}
          url="https://tuanthanh2067.github.io/games-react/"
        />
        <Project
          title="Image Library"
          image={imageLibrary}
          url="https://tuanthanh2067.github.io/gallery-react/"
        />
        <Project
          title="Vacation"
          image={vacation}
          url="https://enigmatic-woodland-93685.herokuapp.com/"
        />
        <StyledMore>
          <button>More++</button>
        </StyledMore>
      </StyledGrid>
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  height: 100%;
`;

const StyledTitle = styled(motion.h1)`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

const StyledGrid = styled(motion.div)`
  height: 80%;
  width: 50%;
  margin: 2.5em auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1475px) {
    width: 60%;
  }

  @media (max-width: 1145px) {
    width: 80%;
  }

  @media (max-width: 875px) {
    width: 90%;
  }

  @media (max-width: 750px) {
    width: 96%;
  }
`;

const StyledMore = styled(motion.div)`
  width: 45%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    font-weight: bold;
    color: white;
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 600px) {
    height: 220px;
  }
`;

export default ProjectPage;