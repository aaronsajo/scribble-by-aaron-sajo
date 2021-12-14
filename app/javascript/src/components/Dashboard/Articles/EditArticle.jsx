import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router-dom";

import articleApi from "apis/articles";

import { ArticleForm } from "./ArticleForm";

import Container from "../../Container";

export const EditArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchArticleDetails = async () => {
    try {
      setLoading(true);
      const response = await articleApi.show(id);
      setArticle(response.data.article);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticleDetails();
  }, []);

  const handleSubmit = async data => {
    try {
      await articleApi.update({ id, payload: { article: data } });
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="mt-40">
          <PageLoader />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ArticleForm
        articleDetails={article}
        setArticleDetails={setArticle}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};
