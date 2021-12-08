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
  const [errors, setErrors] = useState({ input: "", select: "", textarea: "" });
  const fetchCategoryList = async () => {
    try {
      const response = await categoryApi.list();
      setCategoryList(response.data.categories);
    } catch (error) {
      logger.error(error);
    }
  };
  const showStatus = num => {
    if (num) {
      return articleDetails.status === "Published" ? "Save Draft" : "Publish";
    }

    return articleDetails.status === "Published" ? "Publish" : "Save Draft";
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
  const handleErrors = e => {
    e.preventDefault();
    setErrors({ input: "", select: "", textarea: "" });
    let flag = false;
    if (articleDetails.title.trim().length === 0) {
      setErrors(error => ({ ...error, input: "Title Can't be blank." }));
      flag = true;
    }

    if (articleDetails.body.trim().length === 0) {
      setErrors(error => ({ ...error, textarea: "Body Can't be blank." }));
      flag = true;
    }

    if (articleDetails.category_id === null) {
      setErrors(error => ({ ...error, select: "Select a category" }));
      flag = true;
    }

    if (!flag) {
      handleSubmit();
    }
  };
  useEffect(() => {
    fetchCategoryList();
  }, []);
  return (
    <div>
      <form className="w-5/12 mx-auto mt-8" onSubmit={handleErrors}>
        <div className="flex my-4 ">
          <Input
            label="Article Title"
            className="mr-3"
            value={articleDetails.title}
            name="title"
            onChange={handleChange}
            error={errors.input}
          />
          <Select
            isSearchable
            label="Category"
            name="ValueList"
            size="small"
            value={selectedCategory}
            options={categoryList.map(category => ({
              label: category.name,
              value: category.id,
            }))}
            onChange={handleCategories}
            placeholder="Select a category"
            error={errors.select}
          />
        </div>
        <Textarea
          rows="30"
          label="Article Body"
          placeholder="Enter text"
          value={articleDetails.body}
          name="body"
          onChange={handleChange}
          error={errors.textarea}
        />
        <div className="flex mt-4">
          <Button
            className="bg-indigo-500"
            label={showStatus(0)}
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
              {showStatus(1)}
            </li>
          </Dropdown>
          <Button label="Cancel" className="ml-4" to="/" style="text" />
        </div>
      </form>
    </div>
  );
};
