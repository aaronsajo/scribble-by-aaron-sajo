import React from "react";

import { EuiSideBarItem } from "./EuiSideBarItem";

export const EuiSideBar = ({ data }) => {
  return (
    <div className="flex">
      <div className="px-6 py-8 space-y-4  w-300 border-r-2">
        {data.map((category, i) => (
          <div key={i}>
            <EuiSideBarItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};
