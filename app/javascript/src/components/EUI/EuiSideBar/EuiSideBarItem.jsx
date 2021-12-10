import React, { useState } from "react";

import { Right, Down } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

export const EuiSideBarItem = ({ d }) => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <Typography
        style="body2"
        onClick={() => setshow(s => !s)}
        className="flex "
      >
        <div className="mt-1 cursor-pointer">
          {" "}
          {show ? <Down size={14} /> : <Right size={14} />}
        </div>
        <div className="ml-3 font-semibold text-gray-600 cursor-pointer">
          {" "}
          {d}
        </div>
      </Typography>
      {show && (
        <div className="flex flex-col ml-6 font-medium space-y-1">
          <NavLink
            to="/public"
            className="text-gray-400 cursor-default"
            activeClassName="text-indigo-500"
          >
            1
          </NavLink>
          <NavLink to="/public" className="text-gray-400 cursor-default">
            1
          </NavLink>
        </div>
      )}
    </div>
  );
};
