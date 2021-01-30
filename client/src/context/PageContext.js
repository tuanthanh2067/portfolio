import React, { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [totalPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("down");

  return (
    <PageContext.Provider
      value={{
        totalPage,
        currentPage,
        setCurrentPage,
        direction,
        setDirection,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
