import React, { useState } from "react";

import articleApi from "apis/articles";

import { ArticleForm } from "./ArticleForm";

import { Navbar } from "../Navbar";

export const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category_id: null,
    status: "Draft",
  });
  const [selectedCategory, setSelectedCategory] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    await articleApi.create({ article });
    window.location.href = "/";
  };
  return (
    <div>
      <Navbar />
      <ArticleForm
        articleDetails={article}
        setArticleDetails={setArticle}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
