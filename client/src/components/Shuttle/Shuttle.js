import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// shuttle
import ShuttleImage from "../../assets/icons/shuttle.png";

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
  margin: 0.25em 0.25em;

  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

export default Shuttle;
