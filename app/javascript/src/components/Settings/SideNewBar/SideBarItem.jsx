import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

export const SideBarItem = ({ item }) => {
  const heading = item.heading.toLowerCase().split(" ").join("");
  return (
    <div>
      <NavLink
        to={`${heading}`}
        activeClassName="bg-gray-300 rounded-sm "
        className=" py-4 pl-2 flex  "
      >
        <item.tag size={28} />
        <div className="pl-2">
          <Typography style="h4">{item.heading}</Typography>
          <Typography style="body3">{item.subHeading}</Typography>
        </div>
      </NavLink>
    </div>
  );
};
