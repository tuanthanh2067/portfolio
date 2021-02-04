import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// context
import { PageContext } from "../../context/PageContext";

// components
import Tag from "./Tag";
import Dot from "./Dot";

// data
import { data } from "./data";

const Timeline = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  let leftTable = [];
  let rightTable = [];
  let dots = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].pos === "left") {
      leftTable.push(<Tag top={data[i].top}>{data[i].date}</Tag>);
    } else if (data[i].pos === "right") {
      rightTable.push(<Tag top={data[i].top}>{data[i].date}</Tag>);
    }
    dots.push(<Dot top={data[i].top}></Dot>);
  }

  return (
    <StyledTimeline
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <StyledTitle>Timeline</StyledTitle>
      <StyledMain>
        <StyledLeftTable>{leftTable}</StyledLeftTable>
        <StyledLine>{dots}</StyledLine>
        <StyledRightTable>{rightTable}</StyledRightTable>
      </StyledMain>
    </StyledTimeline>
  );
};

const StyledTimeline = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  padding-top: 0.5em;
`;

const StyledMain = styled.div`
  margin: 2em auto;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledLine = styled.div`
  width: 5px;
  height: 80%;
  background: white;
  border-radius: 24px;
  position: relative;
  margin: 0em 1.5em;
`;

const StyledLeftTable = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const StyledRightTable = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

export default Timeline;
