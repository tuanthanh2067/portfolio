import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// shuttle
import ShuttleImage from "../assets/icons/shuttle.png";

const Shuttle = ({ ...rest }) => {
  return (
    <StyledShuttle
      src={ShuttleImage}
      alt="shuttle"
      whileHover={{ scale: 1.35 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      {...rest}
    ></StyledShuttle>
  );
};

const StyledShuttle = styled(motion.img)`
  width: 22px;
  height: 22px;
  margin: 0em 0.25em;
`;

export default Shuttle;
