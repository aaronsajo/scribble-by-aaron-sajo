import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Button, Input } from "@bigbinary/neetoui/v2";

export const CategoryForm = ({ category, setCategory, handleCheck }) => {
  return (
    <div className="w-276 my-4 ml-4">
      <Input
        value={category.name}
        onChange={e => setCategory({ name: e.target.value })}
        suffix={<Button style="text" icon={Check} onClick={handleCheck} />}
      />
    </div>
  );
};
