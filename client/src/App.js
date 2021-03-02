import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

// pages
import IntroPage from "./components/Intro/IntroPage";
import SkillPage from "./components/Skills/SkillPage";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactMePage from "./components/Contact/ContactMePage";
import TimelinePage from "./components/Timeline/TimelinePage";

// page selector
import PageSelector from "./components/PageSelector";

// context
import PageContextProvider from "./context/PageContext";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <PageContextProvider>
      <div className="App">
        <GlobalStyle />
        <PageSelector />
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
    </PageContextProvider>
  );
}

export default App;
