import React, { useState, useEffect } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table } from "@bigbinary/neetoui/v2";

export const ArticleTable = ({ displayColumns }) => {
  const [colData, setColData] = useState([]);
  useEffect(() => {
    const dummyColumnData = displayColumns.map(coloumn => ({
      dataIndex: coloumn,
      key: coloumn,
      title: coloumn,
    }));
    dummyColumnData.push({
      render: () => (
        <div className="flex ">
          <Delete size={20} />
          <Edit size={20} className="ml-2" />
        </div>
      ),
    });
    setColData(dummyColumnData);
  }, [displayColumns]);
  return (
    <div className="h-full ">
      <Table
        rowSelection={false}
        columnData={colData}
        rowData={[
          {
            id: 1,
            title: "Sample 1",
            date: "29/11/2021",
            author: "Oliver",
            category: "Misc",
            status: "Published",
          },
          {
            id: 2,
            title: "Sample 2",
            date: "29/11/2021",
            author: "Oliver",
            category: "Misc",
            status: "Published",
          },
          {
            id: 3,
            title: "Sample 3",
            date: "29/11/2021",
            author: "Oliver",
            category: "Misc",
            status: "Draft",
          },
        ]}
      ></Table>
    </div>
  );
};
