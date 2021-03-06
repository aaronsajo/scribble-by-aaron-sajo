import React, { useState } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";
import { PageLoader } from "@bigbinary/neetoui/v2";

import categoryApi from "apis/categories";

import { EditCategory } from "./EditCategory";

export const ListCategories = ({ category, fetchCategories, loading }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = async id => {
    const value = confirm("Press OK to Delete Category");
    if (value) {
      try {
        await categoryApi.destroy(id);
        fetchCategories();
      } catch (error) {
        logger.error(error);
      }
    }
  };

  if (loading) {
    return <PageLoader className="flex items-center justify-center" />;
  }

  if (isEdit) {
    return (
      <EditCategory
        id={category.id}
        setIsEdit={setIsEdit}
        fetchCategories={fetchCategories}
      />
    );
  }

  return (
    <div className="w-640" id={category.id}>
      <div className="flex justify-between border-gray-100 py-2 border-t-2 ml-4">
        <div className="mt-2 flex space-x-2">
          <i className="ri-drag-move-2-line handle text-gray-600"></i>
          <div>{category.name}</div>
        </div>
        <div className="flex">
          <Button
            style="text"
            icon={Delete}
            onClick={() => handleDelete(category.id)}
          />
          <Button style="text" icon={Edit} onClick={() => setIsEdit(true)} />
        </div>
      </div>
    </div>
  );
};
