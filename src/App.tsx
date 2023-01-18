import React from 'react';
import './App.css';
import SignUpPage from "./pages/SignUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth";

export default function  App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/" element={
            <Auth>
              <HomePage/>
            </Auth>
          }/>
        </Routes>
      </BrowserRouter>
  );
}

