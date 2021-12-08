import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";

import categoryApi from "apis/categories";

import { AddCategory } from "./AddCategory";
import { ListCategories } from "./ListCategories";

import SettingsContainer from "../SettingsContainer";

export const ManageCategories = () => {
  const [categoriesList, setCategoryList] = useState([]);
  const [addCategories, setAddCategories] = useState(false);
  const fetchCategories = async () => {
    const response = await categoryApi.list();
    setCategoryList(response.data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <SettingsContainer>
      <div className="w-720  mx-auto mt-10">
        <Typography style="h3">Manage categories</Typography>
        <Typography style="body1" className="text-gray-600 mb-4">
          Create and configure the categories inside your scribble.
        </Typography>
        {!addCategories && (
          <Button
            label="Add new Category"
            style="link"
            icon={Plus}
            iconPosition="left"
            className="p-2"
            onClick={() => setAddCategories(true)}
          />
        )}
        {addCategories && (
          <AddCategory
            setAddCategories={setAddCategories}
            fetchCategories={fetchCategories}
          />
        )}
        {categoriesList.map((category, index) => (
          <ListCategories
            category={category}
            key={index}
            fetchCategories={fetchCategories}
          />
        ))}
      </div>
    </SettingsContainer>
  );
};
