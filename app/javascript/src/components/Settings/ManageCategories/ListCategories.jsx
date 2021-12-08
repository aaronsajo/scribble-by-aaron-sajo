import React, { useState } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";

import categoryApi from "apis/categories";

import { EditCategory } from "./EditCategory";

export const ListCategories = ({ category, fetchCategories }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = id => {
    const value = confirm("Press OK to Delete Category");
    if (value) {
      try {
        categoryApi.destroy(id);
        fetchCategories();
      } catch (error) {
        logger.error(error);
      }
    }
  };
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
    <div className="w-640">
      <div className="flex justify-between border-gray-100 py-2 border-t-2 ml-4">
        <div className="mt-2">{category.name}</div>
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