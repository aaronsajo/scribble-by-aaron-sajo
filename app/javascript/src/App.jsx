import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import { initializeLogger } from "common/logger";

import { Dashboard } from "./components/Dashboard";
import { CreateArticle } from "./components/Dashboard/Articles/CreateArticle";
import { EditArticle } from "./components/Dashboard/Articles/EditArticle";
import { GeneralSettings } from "./components/Settings";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);
  if (loading) {
    return (
      <div className="p-64">
        <PageLoader />
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />

        <Route exact path="/create/articles/" component={CreateArticle} />
        <Route exact path="/articles/:id/edit" component={EditArticle} />
        <Route exact path="/settings">
          <Redirect to="/settings/general" />
        </Route>
        <Route exact path="/settings/general" component={GeneralSettings} />
      </Switch>
    </Router>
  );
};

export default App;
