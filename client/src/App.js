import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";

// pages
import IntroPage from "./components/Intro/IntroPage";
import SkillPage from "./components/Skills/SkillPage";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactMePage from "./components/Contact/ContactMePage";
import TimelinePage from "./components/Timeline/TimelinePage";

// page selector
import PageChange from "./components/PageChange/PageChange";
import PageSelector from "./components/PageSelector/PageSelector";

// context
import { PageContext } from "./context/PageContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const { goUpHandler, goDownHandler, appElement, sideNavigator } =
    useContext(PageContext);

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      goUpHandler();
    } else if (e.deltaY > 0) {
      goDownHandler();
    }
  };

  return (
    <StyledApp
      className="App"
      onWheel={handleWheel}
      ref={appElement}
      isNavigator={sideNavigator}
    >
      <GlobalStyle />
      <PageSelector />
      <PageChange />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/skills" render={() => <SkillPage />} />
          <Route path="/projects" render={() => <ProjectPage />} />
          <Route path="/timeline" render={() => <TimelinePage />} />
          <Route path="/contact" render={() => <ContactMePage />} />
          <Route path="/" render={() => <IntroPage />} />
        </Switch>
      </AnimatePresence>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  transition: all 0.5s ease;
  margin-left: ${(props) => (props.isNavigator ? "70px" : "0px")};
`;

export default App;
