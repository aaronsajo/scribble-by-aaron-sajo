import React from "react";

import { Typography } from "@bigbinary/neetoui/v2";

export const ShowArticle = () => {
  return (
    <div className="mx-8 mt-8">
      <div className="text-4xl text-gray-800 font-bold">
        Setting up an account in Scribble
      </div>
      <div className="flex">
        <Typography style="body3" className="text-blue-800 bg-blue-100">
          Generating Started
        </Typography>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};
