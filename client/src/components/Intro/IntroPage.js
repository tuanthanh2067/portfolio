import React, { useContext } from "react";
import styled from "styled-components";

// animation stuff
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

// component
import Terminal from "../Window/Terminal";
import Text from "./Text";

// context
import { PageContext } from "../../context/PageContext";

const IntroPage = () => {
  const { direction } = useContext(PageContext);

  const initial = direction === "up" ? "hiddenUp" : "hiddenDown";
  const exit = direction === "up" ? "exitDown" : "exitUp";

  const date = new Date();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
      },
    },
  };

  return (
    <StyledText
      variants={pageAnimation}
      initial={initial}
      animate="show"
      exit={exit}
    >
      <Terminal title="thanh@tuanthanh2067: ~">
        <TerminalText>
          <h5>Current login: {date.toUTCString()}</h5>
          <motion.div variants={container} initial="hidden" animate="show">
            <Text path="C:\Users\tuanthanh2067>" text="Hello person" />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="My name is Tuan Thanh Tan"
            />
            <Text path="C:\Users\tuanthanh2067>" text="I'm a web developer" />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="I'm studying at Seneca College"
            />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="I've always loved computer since I was a child"
            />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="Imagine creating loads of amazing websites that people enjoy using"
            />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="I'm currently working on a live-streaming app and live chat app"
            />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="Hope I can get it done before I graduate LOL"
            />
            <Text
              path="C:\Users\tuanthanh2067>"
              text="Move to next pages to explore more!"
            />
            <Text path="C:\Users\tuanthanh2067>" text="Thank youuu!" />
            <Text path="C:\Users\tuanthanh2067>" text="_" />
          </motion.div>
        </TerminalText>
      </Terminal>
    </StyledText>
  );
};

const StyledText = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TerminalText = styled(motion.div)`
  padding: 0.25em 0.75em;
  div {
    margin: 0.75em 0em;
  }
`;

export default IntroPage;
