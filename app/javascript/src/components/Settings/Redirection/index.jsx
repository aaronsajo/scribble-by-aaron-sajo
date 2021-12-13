import React, { useState, useEffect } from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { Table } from "./Table";

import SettingsContainer from "../SettingsContainer";

export const Redirection = () => {
  const [redirectionDetails, setRedirectionDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchRedirectionsDetails = async () => {
    try {
      setLoading(true);
      const response = await redirectionApi.list();
      setRedirectionDetails(response.data.redirection);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRedirectionsDetails();
  }, []);

  return (
    <SettingsContainer>
      <div className="w-720  mx-auto mt-10">
        <Typography style="h2">Redirection</Typography>
        <Typography style="body1" className="text-gray-600">
          Create and configure redirection rules to send users from old links to
          new links. All redirections are performed with 301 status codes to be
          SEO friendly.
        </Typography>
        <div className="bg-bb-indigo-50 py-4">
          <Table
            redirectionDetails={redirectionDetails}
            fetchRedirectionsDetails={fetchRedirectionsDetails}
            loading={loading}
          />
        </div>
      </div>
    </SettingsContainer>
  );
};
