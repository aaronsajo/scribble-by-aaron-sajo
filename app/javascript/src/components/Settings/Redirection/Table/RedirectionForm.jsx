import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Input, Button } from "@bigbinary/neetoui/v2";

export const RedirectionForm = ({
  handleCheck,
  redirectionDetails,
  setRedirectionDetails,
}) => {
  return (
    <tr className="bg-white border-b-8 border-indigo-100">
      <td className="p-2">
        <Input
          value={redirectionDetails.from}
          onChange={e =>
            setRedirectionDetails(details => ({
              ...details,
              from: e.target.value,
            }))
          }
        />
      </td>
      <td>
        <Input
          value={redirectionDetails.to}
          onChange={e =>
            setRedirectionDetails(details => ({
              ...details,
              to: e.target.value,
            }))
          }
        />
      </td>
      <td>
        <Button
          icon={Check}
          className="ml-2"
          style="text"
          onClick={handleCheck}
        />
      </td>
    </tr>
  );
};
