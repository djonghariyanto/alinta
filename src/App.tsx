import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/home";
import ModalProxy from "./features/modal/components/proxy";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp";

const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>Customer List</StyledHeaderText>
      </StyledHeader>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <ModalProxy/>
    </StyledMain>
  );
};

export default App;
