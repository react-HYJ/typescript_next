import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./page/index";
import Template from "./page/template";
import Hello from "./page/hello";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/template" element={<Template />} />
          <Route path="/hello" element={<Hello />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
