import React from "react";

import PropTypes from "prop-types";

import { SideNewBar } from "./SideNewBar";

import { Container } from "../Container";

const SettingsContainer = ({ children }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-auto  overflow-y-hidden">
          <SideNewBar />
          {children}
        </div>
      </Container>
    </div>
  );
};
SettingsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SettingsContainer;
