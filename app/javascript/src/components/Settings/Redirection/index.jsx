import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import { Table } from "./Table";

import SettingsContainer from "../SettingsContainer";

export const Redirection = () => {
  return (
    <SettingsContainer>
      <div className="w-720  mx-auto mt-10">
        <Typography style="h2">Redirection</Typography>
        <Typography style="body1" className="text-gray-600">
          Create and configure redirection rules to send users from old links to
          new links. All redirections are performed with 301 status codes to be
          SEO friendly.
        </Typography>
        <div className="bg-indigo-100 py-4">
          <Table />
        </div>
      </div>
    </SettingsContainer>
  );
};
