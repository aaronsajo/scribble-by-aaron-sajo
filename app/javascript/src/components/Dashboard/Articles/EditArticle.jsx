import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router-dom";

import articleApi from "apis/articles";

import { ArticleForm } from "./ArticleForm";

import { Navbar } from "../Navbar";

export const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchArticleDetails = async () => {
    try {
      setLoading(true);
      const response = await articleApi.show(id);
      setArticle(response.data.article);
      setSelectedCategory({
        label: response.data.category_name,
        value: response.data.article.category_id,
      });
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticleDetails();
  }, []);
  const handleSubmit = async () => {
    try {
      await articleApi.update({ id, payload: article });
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-40">
          <PageLoader />
        </div>
      </div>
    );
  }

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
