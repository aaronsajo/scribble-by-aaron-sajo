import React from "react";

import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="px-5 border-b-2">
      <Header
        actionBlock={<Button label="Preview" />}
        title={
          <div className="flex text-xl">
            <Typography style="h3" className="px-2">
              Scribble
            </Typography>
            <NavLink
              exact
              to="/"
              activeClassName="text-indigo-700 px-2"
              className="text-gray-800 px-2"
            >
              Articles
            </NavLink>
            <NavLink
              to="/settings"
              activeClassName="text-indigo-700 px-2"
              className="text-gray-800 px-2"
            >
              Settings
            </NavLink>
          </div>
        }
      />
    </div>
  );
};
