import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ children, styled, ...rest }) => {
  const words = children.split("");
  return words.map((word, i) => {
    return (
      <motion.div key={i} {...rest} style={styled} custom={i}>
        {word !== " " ? word : "\u00a0"}
      </motion.div>
    );
  });
};

export default SplitText;
