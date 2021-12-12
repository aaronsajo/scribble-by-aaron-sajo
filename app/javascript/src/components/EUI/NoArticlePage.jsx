import React from "react";

import { EuiNavbar } from "./Navbar/EuiNavbar";

export const NoArticlePage = ({ siteName }) => {
  return (
    <div>
      <EuiNavbar siteName={siteName} />
      <div className="flex h-screen justify-center items-center ">
        <h1>No Published Article!</h1>
      </div>
    </div>
  );
};
