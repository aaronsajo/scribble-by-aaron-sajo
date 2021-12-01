import React, { useState, useEffect } from "react";

import { Search, Plus, Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

import categoryApi from "apis/categories";

export const Menubar = () => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddNewCategory, setIsAddNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const handleCreate = async () => {
    await categoryApi.create({ category: { name: newCategory } });
    setNewCategory("");
  };
  const fetchCategories = async () => {
    const response = await categoryApi.list();
    setCategoryData(response.data.categories);
  };
  useEffect(() => {
    fetchCategories();
  }, [categoryData]);
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
              icon: isAddNewCategory ? Close : Plus,
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
          value={searchCategory}
          onChange={e => setSearchCategory(e.target.value)}
        />
        {isAddNewCategory && (
          <Input
            value={newCategory}
            onChange={e => setNewCategory(e.target.value)}
            suffix={<Button style="text" icon={Check} onClick={handleCreate} />}
          />
        )}
        {categoryData
          .filter(unfilterdCategoryData =>
            unfilterdCategoryData.name
              .toLowerCase()
              .includes(searchCategory.toLocaleLowerCase())
          )
          .map(category => (
            <MenuBar.Block
              label={category.name}
              count={category.count}
              key={category.id}
            />
          ))}
      </MenuBar>
    </div>
  );
};
