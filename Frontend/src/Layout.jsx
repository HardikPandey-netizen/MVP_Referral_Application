import React from "react";
import { AIAgent, LeftBar, NavBar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <NavBar />
      <div className="flex flex-row gap-10">
        <LeftBar />
        <Outlet className="shadow-mt" />
      </div>
      <div className="fixed bottom-5 right-5 z-50">
        <AIAgent />
      </div>
    </div>
  );
};

export default Layout;
