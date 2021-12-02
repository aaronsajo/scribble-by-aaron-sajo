import React, { useState, useEffect } from "react";

import {
  Button,
  Input,
  Select,
  Textarea,
  Dropdown,
} from "@bigbinary/neetoui/v2";

import categoryApi from "apis/categories";

export const ArticleForm = ({
  articleDetails,
  setArticleDetails,
  selectedCategory,
  setSelectedCategory,
  handleSubmit,
}) => {
  const [categoryList, setCategoryList] = useState([]);
  const fetchCategoryList = async () => {
    const response = await categoryApi.list();
    setCategoryList(response.data.categories);
  };
  const handleStatus = () => {
    return articleDetails.status === "Published" ? "Draft" : "Published";
  };
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setArticleDetails({ ...articleDetails, [name]: value });
  };
  const handleCategories = e => {
    setSelectedCategory(e);
    setArticleDetails({ ...articleDetails, category_id: e.value });
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);
  return (
    <div>
      <form className="px-64 mx-32 mt-8" onSubmit={handleSubmit}>
        <div className="flex ">
          <Input
            label="Article Title"
            className="mr-3"
            value={articleDetails.title}
            name="title"
            onChange={handleChange}
          />
          <Select
            isClearable
            isSearchable
            label="Select"
            name="ValueList"
            size="small"
            value={selectedCategory}
            options={categoryList.map(category => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={handleCategories}
            placeholder="Select a category"
          />
        </div>
        <Textarea
          rows="30"
          label="Textarea"
          placeholder="Enter text"
          value={articleDetails.body}
          name="body"
          onChange={handleChange}
        />
        <div className="flex mt-4">
          <Button
            className="bg-indigo-500"
            label={articleDetails.status}
            type="submit"
          />
          <Dropdown
            buttonProps={{
              className: "bg-indigo-500",
            }}
            autoWidth="false"
          >
            <li
              onClick={() => {
                setArticleDetails({
                  ...articleDetails,
                  status: handleStatus(),
                });
              }}
              className="bg-indigo-500 text-gray-100"
            >
              {handleStatus()}
            </li>
          </Dropdown>
        </div>
      </form>
    </div>
  );
};
