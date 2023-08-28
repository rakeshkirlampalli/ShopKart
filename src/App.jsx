import React from "react";
import { Route, Routes } from "react-router-dom";
import NewCart from "./components/NewCart";
import Home from "./components/Home";


const App = () => {
  return (
    <>
   
      <Routes>
        <Route path="/ShopKart" element={<Home/>}/>
        <Route path="/filter" element={<NewCart/>}/>
      </Routes>
    
    </>
  );
};

export default App;
