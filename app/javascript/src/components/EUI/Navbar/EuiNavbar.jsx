import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

export const EuiNavbar = ({ siteName }) => {
  return (
    <div className="h-56 border-b-2 flex items-center justify-center p-4">
      <Typography>{siteName}</Typography>
    </div>
  );
};
