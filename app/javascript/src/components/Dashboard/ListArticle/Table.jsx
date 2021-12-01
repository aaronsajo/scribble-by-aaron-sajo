import React, { useState, useEffect } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table } from "@bigbinary/neetoui/v2";

import articleApi from "apis/articles";

export const ArticleTable = ({
  displayColumns,
  setStatusCount,
  articleFilterConstraint,
  searchString,
}) => {
  const [colData, setColData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [filteredRowData, setFilteredRowData] = useState([]);

  const fetchArticleDetails = async () => {
    const response = await articleApi.list();
    setRowData(response.data.articles);
    setStatusCount({
      draft: response.data.draft,
      published: response.data.draft,
    });
  };

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
  useEffect(() => {
    fetchArticleDetails();
  }, []);

  useEffect(() => {
    const filteredResponse = rowData
      .filter(
        row =>
          row.status === articleFilterConstraint.status ||
          articleFilterConstraint.status === "All"
      )
      .filter(
        row =>
          row.category === articleFilterConstraint.category ||
          articleFilterConstraint.category === null
      )
      .filter(row =>
        row.title.toLowerCase().includes(searchString.toLowerCase())
      );

    setFilteredRowData(filteredResponse);
  }, [articleFilterConstraint, rowData, searchString]);
  return (
    <div className="h-full ">
      <Table
        rowSelection={false}
        columnData={colData}
        rowData={filteredRowData}
      ></Table>
    </div>
  );
};
