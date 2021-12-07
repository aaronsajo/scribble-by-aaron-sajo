import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";

export const RedirectionForm = ({
  handleCheck,
  redirectionDetails,
  setRedirectionDetails,
}) => {
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value.split(" ").join("");
    setRedirectionDetails(details => ({ ...details, [name]: value }));
  };
  return (
    <tr className="bg-white border-b-8 border-indigo-100">
      <td className="p-2">
        <Input
          value={redirectionDetails.from}
          name="from"
          onChange={handleChange}
        />
      </td>
      <td>
        <Input
          value={redirectionDetails.to}
          name="to"
          onChange={handleChange}
        />
      </td>
      <td>
        <Button
          icon={Check}
          className="ml-8"
          style="text"
          onClick={handleCheck}
        />
      </td>
    </tr>
  );
};
