import React, { useState, useEffect } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import categoryApi from "apis/categories";

import { CategoryForm } from "./CategoryForm";

export const EditCategory = ({ id, setIsEdit, fetchCategories }) => {
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchRedirection = async () => {
    try {
      setLoading(true);
      const response = await categoryApi.show(id);
      setCategory(response.data.category);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
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
  if (loading) {
    return <PageLoader className="flex items-center justify-center " />;
  }

  return (
    <CategoryForm
      category={category}
      setCategory={setCategory}
      handleCheck={handleUpdate}
    />
  );
};
