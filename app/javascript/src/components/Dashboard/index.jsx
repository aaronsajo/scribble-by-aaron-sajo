import React, { useState } from "react";

import { ListArticle } from "./ListArticle";
import { Menubar } from "./Menubar";

import { Container } from "../Container";

export const Dashboard = () => {
  const [statusCount, setStatusCount] = useState([]);
  const [articleFilterConstraint, setArticleFilterConstraint] = useState({
    status: "All",
    category: null,
  });
  return (
    <Container>
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
    </Container>
  );
};
