import React, { useEffect, useState } from "react";

import { Right, Down } from "@bigbinary/neeto-icons";
import { Typography } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export const EuiSideBarItem = ({ category }) => {
  const [show, setshow] = useState(false);
  const { slug } = useParams();
  const slugCheck = ele => ele.slug === slug;
  useEffect(() => {
    if (category.articles.some(slugCheck)) {
      setshow(true);
    }
  }, []);

  return (
    <div>
      <Typography
        style="body2"
        onClick={() => setshow(s => !s)}
        className="flex mb-1"
      >
        <div className="mt-1 cursor-pointer">
          {show ? <Down size={14} /> : <Right size={14} />}
        </div>
        <div className="ml-3 font-semibold text-gray-600 cursor-pointer">
          {category.name}
        </div>
      </Typography>
      {show && (
        <div className="flex flex-col ml-6 font-medium space-y-2">
          {category.articles.map((article, index) => (
            <NavLink
              key={index}
              exact
              to={`/public/${article.slug}/show`}
              className="text-gray-400 "
              activeClassName="text-indigo-500"
            >
              {" "}
              {article.title}{" "}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
