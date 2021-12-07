import React, { useState } from "react";

import redirectionApi from "apis/redirections";

import { RedirectionForm } from "./RedirectionForm";

export const AddRedirection = () => {
  const [redirection, setRedirection] = useState({
    from: "",
    to: "",
  });

  const handleAdd = () => {
    try {
      redirectionApi.create(redirection);
      location.reload();
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
