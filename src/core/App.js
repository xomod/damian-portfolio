import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, WrongPage } from "pages";
import { Header, Footer } from "components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={WrongPage} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
