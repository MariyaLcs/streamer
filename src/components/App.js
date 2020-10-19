import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
