import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./routes/Routes.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
