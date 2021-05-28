import styled from "styled-components";
import {
  FaHome,
  FaBookReader,
  FaMeteor,
  FaAsterisk,
  FaStream,
  FaRegAddressCard,
} from "react-icons/fa";

import { useContext } from "react";

import { PageContext } from "../../context/PageContext";

export default function IconSelector() {
  const { currentPage, setCurrentPage, setDirection } = useContext(PageContext);

  const navigateHandler = (page) => {
    if (page > currentPage) {
      setCurrentPage(page);
      setDirection("down");
    } else {
      setCurrentPage(page);
      setDirection("up");
    }
  };

  return (
    <StyledIconSelector>
      <button onClick={() => navigateHandler(1)}>
        <FaHome />
      </button>

      <button onClick={() => navigateHandler(2)}>
        <FaBookReader />
      </button>

      <button onClick={() => navigateHandler(3)}>
        <FaMeteor />
      </button>

      <button onClick={() => navigateHandler(4)}>
        <FaAsterisk />
      </button>

      <button onClick={() => navigateHandler(5)}>
        <FaStream />
      </button>

      <button onClick={() => navigateHandler(6)}>
        <FaRegAddressCard />
      </button>
    </StyledIconSelector>
  );
}

const StyledIconSelector = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    color: white;
    margin: 1.5em 0em;
    border: none;
    background: transparent;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
