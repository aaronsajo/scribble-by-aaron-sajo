import React from "react";

import PropTypes from "prop-types";

import { EuiSideBar } from "./EuiSideBar/EuiSideBar";
import { EuiNavbar } from "./Navbar/EuiNavbar";

const EuiContainer = ({ children, data, siteName }) => {
  return (
    <main className="flex flex-col h-screen">
      <EuiNavbar siteName={siteName} className="overflow-y-hidden" />
      <div className="flex  h-full">
        <EuiSideBar data={data} />
        {children}
      </div>
    </main>
  );
};

EuiContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default EuiContainer;
