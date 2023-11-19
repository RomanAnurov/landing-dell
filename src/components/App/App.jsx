import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page__content">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
