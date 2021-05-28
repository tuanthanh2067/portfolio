import React, { createContext, useState, useRef } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [totalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("down");
  const [clickedSkill, setClickedSkill] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const [clickedProject, setClickedProject] = useState(null);
  const [sideNavigator, setSideNavigator] = useState(true);
  const appElement = useRef(null);

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

  return (
    <PageContext.Provider
      value={{
        totalPage,
        currentPage,
        setCurrentPage,
        direction,
        setDirection,
        clickedSkill,
        setClickedSkill,
        modalInfo,
        setModalInfo,
        clickedProject,
        setClickedProject,
        goUpHandler,
        goDownHandler,
        appElement,
        sideNavigator,
        setSideNavigator,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
