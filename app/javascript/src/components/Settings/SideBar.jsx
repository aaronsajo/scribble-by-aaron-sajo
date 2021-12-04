import React from "react";

import { Settings, Repeat, Seo } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="w-3/12 px-8  h-screen border-r-2">
      <div>
        <NavLink to="settings/General">
          <div className="py-4 pl-2 flex">
            <Settings size={32} />
            <div className="pl-2">
              <Typography style="h4">General</Typography>
              <Typography style="body3" className="text-gray-700">
                Page Title, Brand Name&Meta Description
              </Typography>
            </div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="settings/Redirections">
          <div className="py-4 pl-2 bg-gray-400 flex">
            <Repeat size={32} />
            <div className="pl-2">
              <Typography style="h4">Redirections</Typography>
              <Typography style="body3" className="text-gray-700">
                Page Title, Brand Name&Meta Description
              </Typography>
            </div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="settings/ManageCategories">
          <div className="py-4 pl-2  flex">
            <Seo size={32} />
            <div className="pl-2">
              <Typography style="h4">Manage Categories</Typography>
              <Typography style="body3" className="text-gray-700">
                Page Title, Brand Name&Meta Description
              </Typography>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
