import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/welcome";
import { Login } from "./pages/login";
import { SingUp } from "./pages/singup";
import { MainHead } from "./components/mainhead/mainhead";
import { MainHome } from "./pages/mainhome";
import { MainRouter } from "./mainrouter";

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SingUp />} />
      <Route element={<MainRouter />}>
       <Route >
          <Route path="home" element={<MainHome />} />
       </Route>
      </Route>
    </Routes>
  </>
);