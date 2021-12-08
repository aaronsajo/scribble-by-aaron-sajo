import React, { useState } from "react";

import categoryApi from "apis/categories";

import { CategoryForm } from "./CategoryForm";

export const AddCategory = ({ setAddCategories, fetchCategories }) => {
  const [category, setCategory] = useState({ name: "" });

  const handleCreate = async () => {
    try {
      await categoryApi.create({ category });
      setAddCategories(false);
      fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <CategoryForm
      category={category}
      setCategory={setCategory}
      handleCheck={handleCreate}
    />
  );
};
