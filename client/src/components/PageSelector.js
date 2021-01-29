import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// context
import { PageContext } from "../context/PageContext";

const PageSelector = () => {
  const { currentPage, setCurrentPage, totalPage, setDirection } = useContext(
    PageContext
  );

  const history = useHistory();

  const goDownHandler = () => {
    if (currentPage + 1 > totalPage) return;
    setCurrentPage(currentPage + 1);
    setDirection("down");
  };

  const goUpHandler = () => {
    if (currentPage - 1 < 1) return;
    setCurrentPage(currentPage - 1);
    setDirection("up");
  };

  useEffect(() => {
    if (currentPage === 1) {
      history.push("/");
    } else if (currentPage === 2) {
      history.push("/projects");
    } else if (currentPage === 3) {
      history.push("/contact");
    }
  }, [history, currentPage]);

  return (
    <StyledPageSelector>
      {
        <StyledSvg
          onClick={() => goUpHandler()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </StyledSvg>
      }

      <StyledCurrentPage>{currentPage}</StyledCurrentPage>
      {
        <StyledSvg
          onClick={() => goDownHandler()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </StyledSvg>
      }
    </StyledPageSelector>
  );
};

const StyledPageSelector = styled.div`
  position: absolute;
  width: 14px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 1%;
  transform: translateY(-50%);
  @media (max-width: 875px) {
    top: 95%;
    right: 50%;
    transform: translateY(0%);
    transform: translateX(50%);
    width: 100px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledSvg = styled.svg`
  fill: white;
  cursor: pointer;
  width: 14px;
  height: 14px;
  margin: 1em 0em;
`;

const StyledCurrentPage = styled.div`
  cursor: pointer;
`;

export default PageSelector;
