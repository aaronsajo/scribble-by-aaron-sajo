import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";
import { either, isEmpty, isNil } from "ramda";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders, registerIntercepts } from "apis/axios";
import siteApi from "apis/sites";
import { initializeLogger } from "common/logger";

import PrivateRoute from "./components/Common/PrivateRoute";
import { Dashboard } from "./components/Dashboard";
import { CreateArticle } from "./components/Dashboard/Articles/CreateArticle";
import { EditArticle } from "./components/Dashboard/Articles/EditArticle";
import { Eui } from "./components/EUI";
import { Login } from "./components/EUI/Login/Login";
import { GeneralSettings } from "./components/Settings/General";
import { ManageCategories } from "./components/Settings/ManageCategories";
import { Redirection } from "./components/Settings/Redirection";

const App = () => {
  const authToken = sessionStorage.getItem("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken) && authToken !== "null";
  const [loading, setLoading] = useState(true);
  const [hasPassword, setHasPassword] = useState(true);
  const [siteName, setSiteName] = useState("");
  const fetchSiteDetails = async () => {
    try {
      setLoading(true);
      const response = await siteApi.show();
      setSiteName(response.data.site.name);
      if (!response.data.site.has_password) {
        setHasPassword(false);
      }
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    registerIntercepts();
    initializeLogger();
    setAuthHeaders(setLoading);
    fetchSiteDetails();
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
        <Route
          exact
          path="/settings/general"
          component={() => (
            <GeneralSettings
              name={siteName}
              fetchSiteDetails={fetchSiteDetails}
            />
          )}
        />
        <Route exact path="/settings/redirection" component={Redirection} />

        <Route
          exact
          path="/settings/managecategories"
          component={ManageCategories}
        />
        <Route
          exact
          path="/public/login"
          component={() => <Login siteName={siteName} />}
        />
        <PrivateRoute
          path="/public"
          redirectRoute="/public/login"
          condition={isLoggedIn || !hasPassword}
          Component={() => <Eui siteName={siteName} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
