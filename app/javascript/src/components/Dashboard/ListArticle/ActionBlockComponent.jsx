import React, { useState } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Dropdown, Button, Checkbox } from "@bigbinary/neetoui/v2";

export const ActionBlockComponent = ({ setDisplayColumns }) => {
  const [checkedValue, setCheckedValue] = useState({
    title: true,
    date: true,
    author: true,
    category: true,
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
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
        {" "}
        {Object.keys(checkedValue).map((value, i) => (
          <li key={i}>
            <Checkbox
              id={i}
              label={capitalizeFirstLetter(value)}
              name={value}
              checked={checkedValue[value]}
              onChange={handleChange}
              style={{
                color: "#6366F1",
                borderRadius: "5px",
              }}
            />
          </li>
        ))}
      </Dropdown>
      <Button
        label="Add new Article"
        className="bg-indigo-600 px-4"
        to="/create/articles/"
        icon={Plus}
      />
    </div>
  );
};
