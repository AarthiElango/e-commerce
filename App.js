import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>}>
         
          <Route path="Header" element={<Header/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}
export default App;