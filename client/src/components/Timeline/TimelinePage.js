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
import Table from "./Table";
import Line from "./Line";

// modal
import Modal from "../Modal/Modal";

// data
import { data } from "./data";

const Timeline = () => {
  const { direction, setModalInfo } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  let leftTable = [];
  let rightTable = [];
  let dots = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 1) {
      leftTable.push(
        <Tag key={data[i].id} data={data[i]} onSelected={setModalInfo} />
      );
    } else {
      rightTable.push(
        <Tag key={data[i].id} data={data[i]} onSelected={setModalInfo} />
      );
    }
    dots.push(<Dot key={data[i].id} top={data[i].top}></Dot>);
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
        <Table position="left">{leftTable}</Table>
        <Line>{dots}</Line>
        <Table position="right">{rightTable}</Table>
      </StyledMain>

      <Modal />
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

export default Timeline;
