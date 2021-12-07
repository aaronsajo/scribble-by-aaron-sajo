import React, { useEffect, useState } from "react";

import redirectionApi from "apis/redirections";

import { RedirectionForm } from "./RedirectionForm";

export const EditRedirection = ({ id }) => {
  const [redirection, setRedirection] = useState({});
  const fetchRedirectionDetails = async () => {
    const response = await redirectionApi.show(id);
    setRedirection(response.data.redirection);
  };
  useEffect(() => {
    fetchRedirectionDetails();
  }, []);
  const handleUpdate = () => {
    try {
      redirectionApi.update({ id, payload: redirection });
      location.reload();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <RedirectionForm
      handleCheck={handleUpdate}
      redirectionDetails={redirection}
      setRedirectionDetails={setRedirection}
    />
  );
};
