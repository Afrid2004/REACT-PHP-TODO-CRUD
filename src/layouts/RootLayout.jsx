import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Root = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex w-full h-full bg-gray-50">
        <div className="w-1/5 h-full">
          <Sidebar></Sidebar>
        </div>
        <div className="w-full h-full">
          <Header></Header>
          <div className="overflow-y-auto h-[calc(100%-4rem)] p-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
