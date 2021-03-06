import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import Sortable from "sortablejs";

import categoryApi from "apis/categories";

import { AddCategory } from "./AddCategory";
import { ListCategories } from "./ListCategories";

import SettingsContainer from "../SettingsContainer";

export const ManageCategories = () => {
  const [categoriesList, setCategoryList] = useState([]);
  const [addCategories, setAddCategories] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await categoryApi.list();
      setCategoryList(response.data.categories);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const element = document.getElementById("category-list");
    if (element) {
      Sortable.create(element, {
        handle: ".handle",
        animation: 150,
        ghostClass: "bg-gray-100",
        onEnd: handleDrop,
      });
    }
  }, [loading]);

  useEffect(() => {
    fetchCategories();
  }, []);
  const handleDrop = async e => {
    const droppedElementId = parseInt(e.item.id);
    const newPosition = e.newIndex + 1;
    try {
      await categoryApi.sort({
        id: droppedElementId,
        payload: { category: { position: newPosition } },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <SettingsContainer>
      <div className="w-720  mx-auto mt-10 ">
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
        <div id="category-list" className="overflow-y-scroll h-420">
          {categoriesList.map((category, index) => (
            <ListCategories
              category={category}
              key={index}
              fetchCategories={fetchCategories}
              id={category.id}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </SettingsContainer>
  );
};
