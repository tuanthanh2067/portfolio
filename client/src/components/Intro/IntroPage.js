import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// context
import { PageContext } from "../../context/PageContext";

import NavBar from "./NavBar";

const IntroPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  return (
    <StyledIntroPage
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledLeft>
        <NavBar></NavBar>

        <StyledIntro>
          <h1>Web developer</h1>

          <h2>
            hi, my name is Tuan Thanh Tan but you can call me Buck. This is my
            last year at Seneca College, Ontario. I've always loved doing web
            stuff and coding. Wanna learn more about me, scroll down.
          </h2>
        </StyledIntro>
      </StyledLeft>
      <StyledRight></StyledRight>
    </StyledIntroPage>
  );
};

const StyledIntroPage = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 2em;
`;

const StyledIntro = styled.div`
  margin-top: 6em;

  h1 {
    font-size: 5em;
    color: red;
  }

  h2 {
    font-weight: normal;
  }
`;

const StyledRight = styled.div`
  width: 40%;
`;

export default IntroPage;
