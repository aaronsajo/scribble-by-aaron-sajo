import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { Route, Switch, Redirect } from "react-router-dom";

import publicApi from "apis/public";

import { NoArticlePage } from "./NoArticlePage";
import { ShowArticle } from "./ShowArticle/ShowArticle";

export const Eui = ({ siteName }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategoryDetails = async () => {
    setLoading(true);
    const response = await publicApi.list();
    const filteredCategories = response.data.categories.filter(
      category => category.count > 0
    );
    setData(filteredCategories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, []);
  if (loading) {
    return <PageLoader className=" flex justify-center  mt-64" />;
  }

  if (data.length === 0) return <NoArticlePage siteName={siteName} />;

  return (
    <Switch>
      <Route
        exact
        path="/public/:slug/show"
        component={() => <ShowArticle data={data} siteName={siteName} />}
      />
      <Redirect to={`/public/${data[0].articles[0].slug}/show`} />
    </Switch>
  );
};
