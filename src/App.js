import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";







export default function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router >
    </div>
  );
};





