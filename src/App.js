import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/Header" element={<Header />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);





function App() {
  return (
    <div>
    </div>
  );
}

export default App;
