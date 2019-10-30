import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from "../../pages/Home";
import SearchResults from "../../pages/SearchResults";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import FlightsResults from "../../pages/FlightsResults";

//Others
import {GlobalStyle} from './styled'


function App() {
  return (
    <Container fluid>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchResults} />
          <Route path="/flights/:q" component={FlightsResults} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
