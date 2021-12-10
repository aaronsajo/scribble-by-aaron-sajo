import React, { useEffect, useState } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import publicApi from "apis/public";

import { ShowArticle } from "./ShowArticle";

export const Eui = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDetails = async () => {
    setLoading(true);
    const response = await publicApi.list();
    const filteredCategories = response.data.categories.filter(
      category => category.count > 0
    );
    setData(filteredCategories);
    setLoading(false);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return (
    <Switch>
      <Route
        exact
        path="/public/:slug/show"
        component={() => <ShowArticle data={data} />}
      />
      <Route exact path="/public">
        <Redirect to={`/public/${data[0].articles[0].slug}/show`} />
      </Route>
    </Switch>
  );
};
