import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

// pages
import IntroPage from "./components/Intro/IntroPage";
import SkillPage from "./components/Skills/SkillPage";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactMePage from "./components/Contact/ContactMePage";
import TimelinePage from "./components/Timeline/TimelinePage";

import PageChange from "./components/PageChange/PageChange";

// context
import { PageContext } from "./context/PageContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const { goUpHandler, goDownHandler, appElement } = useContext(PageContext);

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      goUpHandler();
    } else if (e.deltaY > 0) {
      goDownHandler();
    }
  };

  return (
    <div
      className="App"
      onWheel={handleWheel}
      ref={appElement}
      style={{ marginLeft: "60px" }}
    >
      <GlobalStyle />
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
    </div>
  );
}

export default App;
