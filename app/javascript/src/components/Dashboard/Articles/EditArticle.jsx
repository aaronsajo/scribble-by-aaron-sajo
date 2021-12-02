import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import articleApi from "apis/articles";

import { ArticleForm } from "./ArticleForm";

import { Navbar } from "../Navbar";

export const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const fetchArticleDetails = async () => {
    const response = await articleApi.show(id);
    setArticle(response.data.article);
    setSelectedCategory({
      label: response.data.category_name,
      value: response.data.article.category_id,
    });
  };
  useEffect(() => {
    fetchArticleDetails();
  }, []);
  const handleSubmit = async () => {
    await articleApi.update({ id, payload: article });
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
