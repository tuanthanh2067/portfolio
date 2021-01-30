import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

// pages
import IntroPage from "./components/IntroPage";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";
import ContactMePage from "./components/ContactMePage";

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
            <Route path="/" exact render={() => <IntroPage />} />
            <Route path="/skills" render={() => <SkillPage />} />
            <Route path="/projects" render={() => <ProjectPage />} />
            <Route path="/contact" render={() => <ContactMePage />} />
          </Switch>
        </AnimatePresence>
      </div>
    </PageContextProvider>
  );
}

export default App;