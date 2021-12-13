import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { Route, Switch, Redirect } from "react-router-dom";

import publicApi from "apis/public";
import redirectionApi from "apis/redirections";

import { NoArticlePage } from "./NoArticle/NoArticlePage";
import { ShowArticle } from "./ShowArticle/ShowArticle";

export const Eui = ({ siteName }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redirections, setRedirections] = useState([]);

  const fetchCategoryAndRedirectionDetails = async () => {
    try {
      setLoading(true);
      const categoryResponse = await publicApi.list();
      const filteredCategories = categoryResponse.data.categories.filter(
        category => category.count > 0
      );
      setData(filteredCategories);
      const redirectionResponse = await redirectionApi.list();
      setRedirections(redirectionResponse.data.redirection);
    } catch (error) {
      logger.error(error);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchCategoryAndRedirectionDetails();
  }, []);
  if (loading) {
    return <PageLoader className=" flex justify-center  mt-64" />;
  }

  if (data.length === 0) return <NoArticlePage siteName={siteName} />;

  return (
    <Switch>
      {redirections.map((redirection, index) => {
        return (
          <Redirect
            key={index}
            exact
            from={"/" + redirection.from}
            to={"/" + redirection.to}
          />
        );
      })}
      <Route
        exact
        path="/public/:slug/show"
        component={() => <ShowArticle data={data} siteName={siteName} />}
      />
      <Redirect to={`/public/${data[0].articles[0].slug}/show`} />
    </Switch>
  );
};
