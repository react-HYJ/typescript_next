import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Template from "./template";
import Hello from "./hello";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Template />} />
          <Route path="/hello" element={<Hello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
