import React from "react";

import PropTypes from "prop-types";

import { Navbar } from "./Navbar";

const Container = ({ children }) => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar className="overflow-y-hidden" />
      {children}
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
