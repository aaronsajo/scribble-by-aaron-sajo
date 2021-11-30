import React, { useState } from "react";

import { Dropdown, Button, Checkbox } from "@bigbinary/neetoui/v2";

export const ActionBlockComponent = ({ setDisplayColumns }) => {
  const [checkedValue, setCheckedValue] = useState({
    title: true,
    category: true,
    date: true,
    author: true,
    status: true,
  });
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.checked;
    const newCheckboxvalues = { ...checkedValue, [name]: value };
    setCheckedValue(newCheckboxvalues);
    const displayColumnsArrayDummy = Object.keys(newCheckboxvalues).filter(
      col => newCheckboxvalues[col]
    );
    setDisplayColumns(displayColumnsArrayDummy);
  };
  return (
    <div className="flex">
      <Dropdown
        buttonStyle="secondary"
        label="Columns"
        position="bottom-end"
        closeOnSelect={false}
        className="px-4"
      >
        <li>
          <Checkbox
            id="1"
            label="Title"
            name="title"
            checked={checkedValue.title}
            onChange={handleChange}
          />
        </li>
        <li>
          <Checkbox
            id="2"
            label="Categories"
            name="category"
            checked={checkedValue.category}
            onChange={handleChange}
          />
        </li>
        <li>
          <Checkbox
            id="3"
            label="Date"
            name="date"
            checked={checkedValue.date}
            onChange={handleChange}
          />
        </li>

        <li>
          <Checkbox
            id="3"
            label="Author"
            name="author"
            checked={checkedValue.author}
            onChange={handleChange}
          />
        </li>
        <li>
          <Checkbox
            id="4"
            label="Status"
            name="status"
            checked={checkedValue.status}
            onChange={handleChange}
          />
        </li>
      </Dropdown>
      <Button label="Add new Article" className="bg-indigo-600 px-4" />
    </div>
  );
};
