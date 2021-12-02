import React, { useState, useEffect } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { Table, Button } from "@bigbinary/neetoui/v2";

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
  const handleDelete = id => {
    const value = confirm("Press OK to Delete Article");
    if (value) {
      articleApi.destroy(id);
      fetchArticleDetails();
    }
  };
  const fetchArticleDetails = async () => {
    const response = await articleApi.list();
    setRowData(response.data.articles);
    setStatusCount({
      draft: response.data.draft,
      published: response.data.published,
    });
  };

  useEffect(() => {
    const dummyColumnData = displayColumns.map(coloumn => ({
      dataIndex: coloumn,
      key: coloumn,
      title: coloumn,
    }));
    dummyColumnData.push({
      render: (_, rowData) => (
        <div className="flex ">
          <Button
            icon={Delete}
            style="text"
            onClick={() => handleDelete(rowData.id)}
          />
          <Button
            icon={Edit}
            style="text"
            to={`/articles/${rowData.id}/edit`}
          />
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
