import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// anytime a component wraps around another component...its called
// as Higher Order Component
ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);