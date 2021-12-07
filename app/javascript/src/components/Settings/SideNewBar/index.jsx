import React from "react";

import { Settings, Repeat, Seo } from "@bigbinary/neeto-icons";

import { SideBarItem } from "./SideBarItem";

export const SideNewBar = () => {
  const sideBarDetails = [
    {
      heading: "General",
      subHeading: "Page Title, Brand Name&Meta Description",
      tag: Settings,
    },
    {
      heading: "Redirection",
      subHeading: "Create & configure redirection ",
      tag: Repeat,
    },
    {
      heading: "Manage Categories",
      subHeading: "Page Title, Brand Name&Meta Description",
      tag: Seo,
    },
  ];

  return (
    <div className="w-384  pl-4 pr-5   h-screen border-r-2">
      <div className="mt-4">
        {sideBarDetails.map((item, i) => (
          <div key={i}>
            <SideBarItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
