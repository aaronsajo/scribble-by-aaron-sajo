import React, { useState } from "react";

import { SubHeader } from "@bigbinary/neetoui/v2/layouts";

import { ActionBlockComponent } from "./ActionBlockComponent";
import { ArticleTable } from "./Table";

export const ListArticle = ({ setStatusCount, articleFilterConstraint }) => {
  const [searchString, setSearchString] = useState("");
  const [displayColumns, setDisplayColumns] = useState([
    "title",
    "category",
    "date",
    "author",
    "status",
  ]);
  return (
    <div className="overflow-x-auto w-screen mt-6">
      <div className="flex px-2">
        <SubHeader
          className="justify-end"
          searchProps={{
            value: searchString,
            onChange: e => setSearchString(e.target.value),
            placeholder: "Search article title",
          }}
          actionBlock={
            <ActionBlockComponent setDisplayColumns={setDisplayColumns} />
          }
        />
      </div>

      <div className="h-screen ">
        <ArticleTable
          displayColumns={displayColumns}
          setStatusCount={setStatusCount}
          articleFilterConstraint={articleFilterConstraint}
          searchString={searchString}
        />
      </div>
    </div>
  );
};
