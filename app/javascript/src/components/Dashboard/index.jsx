import React from "react";

import { ListArticle } from "./ListArticle";
import { Menubar } from "./Menubar";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      <div className="flex flex-auto  overflow-y-hidden">
        <Menubar />
        <ListArticle />
      </div>
    </main>
  );
};
