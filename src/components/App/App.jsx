import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
