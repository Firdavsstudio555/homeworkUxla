import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import "./index.css"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
export default App;