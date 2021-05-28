import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext } from "react";

import IconSelector from "../PageSelector/IconSelector";

import { PageContext } from "../../context/PageContext";

export default function PageChange() {
  const { sideNavigator, setSideNavigator } = useContext(PageContext);

  const navigatorHandler = () => {
    setSideNavigator((prev) => !prev);
  };

  return (
    <StyledPageChange active={sideNavigator}>
      <StyledLeft>
        <IconSelector />
        <StyledHandler>
          <button onClick={navigatorHandler}>
            {sideNavigator ? <FaArrowLeft /> : <FaArrowRight />}
          </button>
        </StyledHandler>
      </StyledLeft>
    </StyledPageChange>
  );
}

const StyledPageChange = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 90%;
  background: rgb(25, 25, 25);
  transform: ${(props) =>
    props.active ? "translate(0px, 5%)" : "translate(-70px, 5%)"};
  transition: all 0.5s ease;

  border-top: 1px solid rgb(40, 40, 40);
  border-bottom: 1px solid rgb(40, 40, 40);
  border-right: 1px solid rgb(40, 40, 40);

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const StyledLeft = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledHandler = styled.div`
  position: absolute;
  top: 90%;
  right: -30px;

  button {
    background: rgb(25, 25, 25);
    border: none;
    cursor: pointer;
    width: 30px;
    height: 60px;
    border-top: 1px solid rgb(40, 40, 40);
    border-right: 1px solid rgb(40, 40, 40);
    border-bottom: 1px solid rgb(40, 40, 40);

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    svg {
      fill: white;
    }
  }
`;
