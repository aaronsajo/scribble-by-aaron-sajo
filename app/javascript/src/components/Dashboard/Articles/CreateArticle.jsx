import React, { useState } from "react";

import articleApi from "apis/articles";

import { ArticleForm } from "./ArticleForm";

import { Container } from "../../Container";

export const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    body: "",
    category_id: null,
    status: "Draft",
  });
  const [selectedCategory, setSelectedCategory] = useState();
  const handleSubmit = async () => {
    try {
      await articleApi.create({ article });
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <Container>
      <ArticleForm
        articleDetails={article}
        setArticleDetails={setArticle}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};