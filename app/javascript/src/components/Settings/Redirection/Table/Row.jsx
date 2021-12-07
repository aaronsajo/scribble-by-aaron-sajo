import React, { useState } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { EditRedirection } from "./EditRedirection";

export const Row = ({ redirection }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = id => {
    const value = confirm("Press OK to Delete Redirection");
    if (value) {
      try {
        redirectionApi.destroy(id);
        location.reload();
      } catch (error) {
        logger.error(error);
      }
    }
  };
  if (isEdit) return <EditRedirection id={redirection.id} />;

  return (
    <tr className="bg-white border-b-8 border-indigo-100">
      <td className="text-left flex p-3">
        <Typography style="body2" className="text-gray-500">
          {window.location.origin}
        </Typography>
        <Typography style="body2"> /{redirection.from}</Typography>
      </td>
      <td>
        {window.location.origin}/{redirection.to}
      </td>
      <td>
        <Button style="text" icon={Edit} onClick={() => setIsEdit(true)} />
        <Button
          style="text"
          icon={Delete}
          onClick={() => handleDelete(redirection.id)}
        />
      </td>
    </tr>
  );
};
