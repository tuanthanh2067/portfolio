import React, { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [totalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("down");
  const [clickedSkill, setClickedSkill] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);

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
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
