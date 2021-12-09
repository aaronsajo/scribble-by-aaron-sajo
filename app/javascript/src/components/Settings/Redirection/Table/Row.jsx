import React, { useState } from "react";

import { Edit, Delete } from "@bigbinary/neeto-icons";
import { Typography, Button } from "@bigbinary/neetoui/v2";
import { PageLoader } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { EditRedirection } from "./EditRedirection";

export const Row = ({ redirection, fetchRedirectionsDetails, loading }) => {
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

  if (loading) {
    return <PageLoader className="flex items-center justify-center " />;
  }

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
      <td
        className="text-left flex p-3 overflow-x-auto mr-3"
        style={{ maxWidth: "300px", minWidth: "300px" }}
      >
        <Typography style="body2" className="text-gray-500">
          {window.location.origin}
        </Typography>
        <Typography style="body2"> /{redirection.from}</Typography>
      </td>
      <td
        className=" overflow-x-auto"
        style={{ maxWidth: "280px", minWidth: "280px" }}
      >
        {window.location.origin}/{redirection.to}
      </td>
      <td className="pr-2">
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
