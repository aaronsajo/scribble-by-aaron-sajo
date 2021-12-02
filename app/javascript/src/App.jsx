import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";

import { Dashboard } from "./components/Dashboard";
import { CreateArticle } from "./components/Dashboard/Articles/CreateArticle";
import { EditArticle } from "./components/Dashboard/Articles/EditArticle";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />

        <Route exact path="/create/articles/" component={CreateArticle} />
        <Route exact path="/articles/:id/edit" component={EditArticle} />
      </Switch>
    </Router>
  );
};

export default App;
