import React, { useState } from "react";

import redirectionApi from "apis/redirections";

import { RedirectionForm } from "./RedirectionForm";

export const AddRedirection = ({
  setAddRedirection,
  fetchRedirectionsDetails,
}) => {
  const [redirection, setRedirection] = useState({
    from: "",
    to: "",
  });

  const handleAdd = async () => {
    try {
      await redirectionApi.create(redirection);
      setAddRedirection(false);
      fetchRedirectionsDetails();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <RedirectionForm
      handleCheck={handleAdd}
      redirectionDetails={redirection}
      setRedirectionDetails={setRedirection}
    />
  );
};
