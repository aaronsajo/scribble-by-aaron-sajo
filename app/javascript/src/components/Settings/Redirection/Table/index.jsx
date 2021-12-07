import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { AddRedirection } from "./AddRedirection";
import { Header } from "./Header";
import { Row } from "./Row";

export const Table = () => {
  const [redirectionDetails, setRedirectionDetails] = useState([]);
  const [addRedirection, setAddRedirection] = useState(false);

  const fetchRedirectionDetails = async () => {
    try {
      const response = await redirectionApi.list();
      setRedirectionDetails(response.data.redirection);
    } catch (error) {
      logger.error(error);
    }
  };
  useEffect(() => {
    fetchRedirectionDetails();
  }, []);
  return (
    <table className="w-11/12 mx-auto ">
      <Header />
      <tbody>
        {redirectionDetails.map((redirection, index) => (
          <Row redirection={redirection} key={index} />
        ))}

        {addRedirection && <AddRedirection />}
        <tr>
          <td>
            <Button
              icon={Plus}
              label="Add New Redirection"
              style="link"
              iconPosition="left"
              onClick={() => setAddRedirection(true)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
