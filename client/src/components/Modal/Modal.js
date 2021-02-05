import React, { useContext } from "react";
import styled from "styled-components";

import Overlay from "./Overlay";

import { PageContext } from "../../context/PageContext";

// animation
import { motion, AnimatePresence } from "framer-motion";
import { modalAnimation } from "../../animation";

const Modal = () => {
  const { modalInfo, setModalInfo } = useContext(PageContext);

  const closeHandler = () => {
    setModalInfo(null);
  };

  const modal = modalInfo && (
    <motion.div
      key="modal"
      variants={modalAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Overlay onSelected={closeHandler} />
      <StyledModal>
        <StyledHeader>
          <h3>{modalInfo.date}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={closeHandler}
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </StyledHeader>
        <StyledBody>
          <p>{modalInfo.story}</p>
        </StyledBody>
      </StyledModal>
    </motion.div>
  );

  return <AnimatePresence>{modal}</AnimatePresence>;
};

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
  width: 350px;
  min-height: 100px;
  padding: 0.75em;
  z-index: 15;
  @media (max-width: 350px) {
    width: 100%;
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 0em;
  border-bottom: 1px solid #d4d4d4;

  svg {
    width: 11px;
    height: 11px;
    cursor: pointer;
    fill: #7e7e7e;
  }
`;

const StyledBody = styled.div`
  font-size: 0.8em;
  padding: 1em 0em;
`;

export default Modal;
