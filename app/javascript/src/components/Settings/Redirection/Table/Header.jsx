import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

export const Header = () => {
  const columns = ["FROM PATH", "TO PATH", "ACTIONS"];
  return (
    <thead>
      <tr className="text-left w-full">
        {columns.map((title, index) => (
          <th key={index}>
            <Typography style="h5" className="py-3 text-gray-500">
              {title}
            </Typography>
          </th>
        ))}
      </tr>
    </thead>
  );
};
