import React, { useEffect, useState } from "react";

import { PageLoader } from "@bigbinary/neetoui/v2";

import redirectionApi from "apis/redirections";

import { RedirectionForm } from "./RedirectionForm";

export const EditRedirection = ({
  id,
  setIsEdit,
  fetchRedirectionsDetails,
}) => {
  const [redirection, setRedirection] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchRedirection = async () => {
    try {
      setLoading(true);
      const response = await redirectionApi.show(id);
      setRedirection(response.data.redirection);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
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
  if (loading) {
    return <PageLoader className="flex items-center justify-center " />;
  }

  return (
    <RedirectionForm
      handleCheck={handleUpdate}
      redirectionDetails={redirection}
      setRedirectionDetails={setRedirection}
    />
  );
};
