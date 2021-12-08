import React, { useState, useEffect } from "react";

import { Plus } from "@bigbinary/neeto-icons";
import { Button, Typography } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { AddRedirection } from "./AddRedirection";
import { Header } from "./Header";
import { Row } from "./Row";

export const Table = () => {
  const [redirectionDetails, setRedirectionDetails] = useState([]);
  const [addRedirection, setAddRedirection] = useState(false);

  const fetchRedirectionsDetails = async () => {
    try {
      const response = await redirectionApi.list();
      setRedirectionDetails(response.data.redirection);
    } catch (error) {
      logger.error(error);
    }
  };
  useEffect(() => {
    fetchRedirectionsDetails();
  }, []);
  return (
    <table className="w-680 mx-auto " style={{ minWidth: "680px" }}>
      <Header />
      <tbody>
        {redirectionDetails.length === 0 ? (
          <tr>
            <td colSpan="3" className="text-center">
              <Typography className="mb-2">No redirections found.</Typography>
            </td>
          </tr>
        ) : (
          redirectionDetails.map((redirection, index) => (
            <Row
              redirection={redirection}
              key={index}
              fetchRedirectionsDetails={fetchRedirectionsDetails}
            />
          ))
        )}

        {addRedirection && (
          <AddRedirection
            setAddRedirection={setAddRedirection}
            fetchRedirectionsDetails={fetchRedirectionsDetails}
          />
        )}
        <tr>
          <td>
            <Button
              icon={Plus}
              label="Add New Redirection"
              style="link"
              iconPosition="left"
              onClick={() => setAddRedirection(value => !value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
