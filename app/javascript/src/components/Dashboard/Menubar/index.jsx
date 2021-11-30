import React, { useState } from "react";

import { Search, Plus } from "@bigbinary/neeto-icons";
import { Typography, Input } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

export const Menubar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddNewCategory, setIsAddNewCategory] = useState(false);
  return (
    <div>
      <MenuBar showMenu={true} title="Articles">
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Draft" count={2} />
        <MenuBar.Block label="Published" count={7} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
            {
              icon: Plus,
              onClick: () => setIsAddNewCategory(!isAddNewCategory),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Categories
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {isAddNewCategory && <Input />}
        <MenuBar.Block label="Getting Started" count={10} />
        <MenuBar.Block label="Apps & integratiom" count={10} />
        <MenuBar.Block label="Security & Privacy" count={20} />
        <MenuBar.Block label="Misc" count={27} />
      </MenuBar>
    </div>
  );
};
