import "./App.css";
import React, { Component }  from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  return (
    <>
    
      <div className="container my-3">
      {/* <BrowserRouter> */}
      
      <Navbar title="TextUtils" about="About" /> 
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Enter text to analyze"></TextForm>}/> */}
            <TextForm heading="Enter text to analyze"></TextForm>
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
