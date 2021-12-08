import React, { useState, useEffect } from "react";

import { Search, Plus, Check, Close } from "@bigbinary/neeto-icons";
import { Typography, Input, Button } from "@bigbinary/neetoui/v2";
import { MenuBar } from "@bigbinary/neetoui/v2/layouts";

import categoryApi from "apis/categories";

export const Menubar = ({
  statusCount,
  articleFilterConstraint,
  setArticleFilterConstraint,
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);
  const [isAddNewCategory, setIsAddNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");

  const handleCreate = async () => {
    try {
      await categoryApi.create({ category: { name: newCategory } });
      setNewCategory("");
    } catch (error) {
      logger.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await categoryApi.list();
      setCategoryData(response.data.categories);
    } catch (error) {
      logger.error(error);
    }
  };

  const handleStatus = status => {
    setArticleFilterConstraint({
      ...articleFilterConstraint,
      status,
    });
  };

  const handleCategories = category => {
    if (articleFilterConstraint.category === category) {
      setArticleFilterConstraint({
        ...articleFilterConstraint,
        category: null,
      });
    } else {
      setArticleFilterConstraint({
        ...articleFilterConstraint,
        category,
      });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [newCategory, statusCount]);

  return (
    <div>
      <MenuBar showMenu={true} title="Articles">
        <MenuBar.Block
          label="All"
          count={statusCount.draft + statusCount.published}
          onClick={() => handleStatus("All")}
          active={articleFilterConstraint.status === "All"}
        />
        <MenuBar.Block
          label="Draft"
          count={statusCount.draft}
          onClick={() => handleStatus("Draft")}
          active={articleFilterConstraint.status === "Draft"}
        />
        <MenuBar.Block
          label="Published"
          count={statusCount.published}
          onClick={() => handleStatus("Published")}
          active={articleFilterConstraint.status === "Published"}
        />

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
              onClick={() => handleCategories(category.name)}
              active={articleFilterConstraint.category === category.name}
            />
          ))}
      </MenuBar>
    </div>
  );
};
