import React, { useState } from "react";

import { ListArticle } from "./ListArticle";
import { Menubar } from "./Menubar";

import { Navbar } from "../Navbar";

export const Dashboard = () => {
  const [statusCount, setStatusCount] = useState([]);
  const [articleFilterConstraint, setArticleFilterConstraint] = useState({
    status: "All",
    category: null,
  });
  return (
    <main className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      <div className="flex flex-auto  overflow-y-hidden">
        <Menubar
          statusCount={statusCount}
          articleFilterConstraint={articleFilterConstraint}
          setArticleFilterConstraint={setArticleFilterConstraint}
        />
        <ListArticle
          setStatusCount={setStatusCount}
          articleFilterConstraint={articleFilterConstraint}
        />
      </div>
    </main>
  );
};
