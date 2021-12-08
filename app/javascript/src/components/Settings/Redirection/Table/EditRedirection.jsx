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
    try {
      const response = await redirectionApi.show(id);
      setRedirection(response.data.redirection);
    } catch (error) {
      logger.error(error);
    }
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
