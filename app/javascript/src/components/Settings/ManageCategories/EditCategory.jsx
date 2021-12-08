import React, { useState, useEffect } from "react";

import { CategoryForm } from "./CategoryForm";

import categoryApi from "../../../apis/categories";

export const EditCategory = ({ id, setIsEdit, fetchCategories }) => {
  const [category, setCategory] = useState({});
  const fetchRedirection = async () => {
    const response = await categoryApi.show(id);
    setCategory(response.data.category);
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
