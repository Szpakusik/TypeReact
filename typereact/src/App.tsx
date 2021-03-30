import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Form from "./components/Form/Form";
import Thanks from "./components/Thanks/Thanks";

function App() {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/form">
              <Form
                firstName={firstName}
                setFirstName={setFirstName}
                secondName={secondName}
                setSecondName={setSecondName}
              />
            </Route>
            <Route path="/thanks">
              <Thanks firstName={firstName} secondName={secondName} />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
