import React, { useEffect, useState } from "react";

import { Typography } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router";

import EuiContainer from "../EuiContainer";

export const ShowArticle = ({ data, siteName }) => {
  const { slug } = useParams();

  const [article, setArticle] = useState({});
  useEffect(() => {
    const flatenedData = data
      .map(val => val.articles)
      .flat()
      .filter(article => article.slug === slug)[0];
    setArticle(flatenedData);
  }, []);

  return (
    <EuiContainer data={data} siteName={siteName}>
      <div className="m-8 overflow-scroll">
        <div className="text-4xl text-gray-800 font-bold">{article.title}</div>
        <div className="flex mt-8">
          <Typography style="body3" className="text-blue-800 bg-blue-100 p-1">
            {article.category}
          </Typography>
          <Typography style="body2" className="text-gray-400 font-medium ml-4">
            {article.date}
          </Typography>
        </div>
        <Typography className="mt-6 whitespace-pre-wrap" style="body2">
          {article.body}
        </Typography>
      </div>
    </EuiContainer>
  );
};
