import React from "react";

import { SideBar } from "./SideBar";

import { Navbar } from "../Navbar";

export const Settings = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      <div className="flex flex-auto  overflow-y-hidden">
        <SideBar />
      </div>
    </main>
  );
};
