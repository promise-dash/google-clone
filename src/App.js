import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="bg-[#202124] p-5 h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <HomePage /> }/>
          <Route path="/search/:searchTerm" exact element={ <SearchPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
