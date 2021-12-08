import React, { useState, useEffect } from "react";

import categoryApi from "apis/categories";

import { CategoryForm } from "./CategoryForm";

export const EditCategory = ({ id, setIsEdit, fetchCategories }) => {
  const [category, setCategory] = useState({});
  const fetchRedirection = async () => {
    try {
      const response = await categoryApi.show(id);
      setCategory(response.data.category);
    } catch (error) {
      logger.error(error);
    }
  };
  useEffect(() => {
    fetchRedirection();
  }, []);
  const handleUpdate = async () => {
    try {
      await categoryApi.update({ id, payload: category });
      setIsEdit(false);
      fetchCategories();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <CategoryForm
      category={category}
      setCategory={setCategory}
      handleCheck={handleUpdate}
    />
  );
};
