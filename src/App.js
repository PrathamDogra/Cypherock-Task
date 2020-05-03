import React from "react";
import Front from "./components/Frontpage/Front";
import Form from "./components/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Front} />
       
        <Route path="/form" exact component={Form} />
      </Router>
    </div>
  );
}

export default App;
