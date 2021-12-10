import React from "react";

import { EuiSideBarItem } from "./EuiSideBarItem";

export const EuiSideBar = () => {
  const data = [
    "hello all",
    "basement",
    "catch me if you can",
    "dont do it",
    "encourage",
  ];
  return (
    <div className="flex">
      <div className="px-6 py-8 space-y-4  w-300 border-r-2">
        {data.map((d, i) => (
          <div key={i}>
            <EuiSideBarItem d={d} />
          </div>
        ))}
      </div>
    </div>
  );
};
