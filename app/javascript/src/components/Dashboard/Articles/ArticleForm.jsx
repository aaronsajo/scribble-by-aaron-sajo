import React, { useState, useEffect } from "react";

import { Button, Dropdown } from "@bigbinary/neetoui/v2";
import { Input, Select, Textarea } from "@bigbinary/neetoui/v2/formik";
import { Formik, Form } from "formik";
import * as yup from "yup";

import categoryApi from "apis/categories";

export const ArticleForm = ({ articleDetails, handleSubmit }) => {
  const [categoryList, setCategoryList] = useState([]);

  const showStatus = () => {
    return articleDetails.status === "Published" ? "Publish" : "Save Draft";
  };
  const [buttonLabel, setButtonLabel] = useState(() => showStatus());

  const fetchCategoryList = async () => {
    try {
      const response = await categoryApi.list();
      setCategoryList(response.data.categories);
    } catch (error) {
      logger.error(error);
    }
  };
  const schema = yup.object().shape({
    title: yup.string().required("Title can't be blank."),
    body: yup.string().required("Body can't be blank."),
    category_id: yup.string().required("Category can't be blank."),
  });

  useEffect(() => {
    fetchCategoryList();
  }, []);
  return (
    <Formik
      initialValues={articleDetails}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      onSubmit={values => {
        handleSubmit(values);
      }}
    >
      {({ values, errors, setFieldValue }) => (
        <Form className="w-5/12 mx-auto mt-8">
          <div className="flex my-4 ">
            <Input
              label="Article Title"
              className="mr-3"
              value={values.title}
              name="title"
              error={errors.title}
              placeholder="Enter Title"
            />
            <Select
              isSearchable
              label="Category"
              name="ValueList"
              size="small"
              value={{ label: values.category_name, value: values.category_id }}
              options={categoryList.map(category => ({
                label: category.name,
                value: category.id,
              }))}
              onChange={e => {
                setFieldValue("category_name", e.label);
                setFieldValue("category_id", e.value);
              }}
              placeholder="Select a category"
              error={errors.category_id}
            />
          </div>
          <Textarea
            rows="30"
            label="Article Body"
            placeholder="Enter text"
            value={values.body}
            name="body"
            error={errors.body}
          />
          <div className="flex mt-4">
            <Button
              className="bg-indigo-500 rounded-l-md rounded-r-none"
              label={buttonLabel}
              type="submit"
            />
            <Dropdown
              buttonProps={{
                className: "bg-indigo-500 rounded-r-md rounded-l-none",
              }}
              autoWidth="false"
            >
              <ul
                onClick={e => {
                  setButtonLabel(e.target.firstChild.nodeValue);
                  setFieldValue("status", e.target.getAttribute("value"));
                }}
              >
                <li className="bg-indigo-500 text-gray-100" value="Draft">
                  Save Draft
                </li>
                <li className="bg-indigo-500 text-gray-100" value="Published">
                  Publish
                </li>
              </ul>
            </Dropdown>
            <Button label="Cancel" className="ml-4" to="/" style="text" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
