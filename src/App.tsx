import React from "react"
import { GlobalStyles } from "./styles/GlobalStyles"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Mint from "./pages/Mint"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/"
              exact
            >
              <Home />
            </Route>
            <Route path="/mint/:id">
              <Mint />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
