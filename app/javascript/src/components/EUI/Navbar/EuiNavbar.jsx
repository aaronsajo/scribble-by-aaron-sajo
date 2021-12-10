import React, { useEffect, useState } from "react";

import { Typography } from "@bigbinary/neetoui/v2";

import siteApi from "../../../apis/sites";

export const EuiNavbar = () => {
  const [siteName, setSiteName] = useState("");
  const fetchSiteName = async () => {
    try {
      const response = await siteApi.show();
      setSiteName(response.data.name);
    } catch (error) {
      logger.error();
    }
  };
  useEffect(() => {
    fetchSiteName();
  }, []);
  return (
    <div className="h-56 border-b-2 flex items-center justify-center">
      <Typography>{siteName}</Typography>
    </div>
  );
};
