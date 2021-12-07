import React, { useState } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { EditRedirection } from "./EditRedirection";

export const Row = ({ redirection, fetchRedirectionsDetails }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = async id => {
    const value = confirm("Press OK to Delete Redirection");
    if (value) {
      try {
        await redirectionApi.destroy(id);
        fetchRedirectionsDetails();
      } catch (error) {
        logger.error(error);
      }
    }
  };
  if (isEdit) {
    return (
      <EditRedirection
        id={redirection.id}
        setIsEdit={setIsEdit}
        fetchRedirectionsDetails={fetchRedirectionsDetails}
      />
    );
  }

  return (
    <tr className="bg-white border-b-8 border-indigo-100">
      <td className="text-left flex p-3">
        <Typography style="body2" className="text-gray-500">
          {window.location.origin}
        </Typography>
        <Typography style="body2"> /{redirection.from}</Typography>
      </td>
      <td>
        <Typography style="body2">
          {window.location.origin}/{redirection.to}
        </Typography>
      </td>
      <td>
        <Button
          style="text"
          icon={Delete}
          onClick={() => handleDelete(redirection.id)}
        />
        <Button style="text" icon={Edit} onClick={() => setIsEdit(true)} />
      </td>
    </tr>
  );
};
