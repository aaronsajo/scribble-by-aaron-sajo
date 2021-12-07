import React, { useEffect, useState } from "react";

import redirectionApi from "apis/redirections";

import { RedirectionForm } from "./RedirectionForm";

export const EditRedirection = ({
  id,
  setIsEdit,
  fetchRedirectionsDetails,
}) => {
  const [redirection, setRedirection] = useState({});
  const fetchRedirection = async () => {
    const response = await redirectionApi.show(id);
    setRedirection(response.data.redirection);
  };
  useEffect(() => {
    fetchRedirection();
  }, []);
  const handleUpdate = async () => {
    try {
      await redirectionApi.update({ id, payload: redirection });
      setIsEdit(false);
      fetchRedirectionsDetails();
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
