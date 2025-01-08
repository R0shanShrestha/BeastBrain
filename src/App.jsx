import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Main/Home";
const App = () => {
  return (
    <>
      <div className="w-screen h-[100dvh] bg-slate-900 text-white flex">
        <Sidebar />
        <Home />
        <div className="hidden lg:flex  w-[300px]"></div>
      </div>
    </>
  );
};

export default App;
