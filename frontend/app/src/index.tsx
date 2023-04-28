import React from "react";
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import {Header} from './Components/Header/Header'
import App from "./App";
import Location from "./Features/Location/Location";
import SignIn from "./Features/SignIn/SignIn";
import SignUp from "./Features/SignUp/SignUp";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
  }