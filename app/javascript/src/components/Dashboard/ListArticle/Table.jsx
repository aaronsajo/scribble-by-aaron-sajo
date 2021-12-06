import React, { useState, useEffect } from "react";

import { Delete, Edit } from "@bigbinary/neeto-icons";
import { PageLoader } from "@bigbinary/neetoui/v2";
import { Table, Button, Typography } from "@bigbinary/neetoui/v2";

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
  const [loading, setLoading] = useState(false);
  const handleDelete = id => {
    const value = confirm("Press OK to Delete Article");
    if (value) {
      try {
        articleApi.destroy(id);
        fetchArticleDetails();
      } catch (error) {
        logger.error(error);
      }
    }
  };
  const fetchArticleDetails = async () => {
    try {
      setLoading(true);
      const response = await articleApi.list();
      setRowData(response.data.articles);
      setStatusCount({
        draft: response.data.draft,
        published: response.data.published,
      });
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const dummyColumnData = displayColumns.map(coloumn => ({
      dataIndex: coloumn,
      key: coloumn,
      title: coloumn,
      className: coloumn === "title" ? "text-indigo-500" : null,
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

  if (loading) {
    return (
      <div>
        <Typography style="h3" className="ml-4 py-3">
          {" "}
          Articles
        </Typography>
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="h-full ">
      <Typography style="h3" className="ml-4 py-3">
        {rowData.length} Articles
      </Typography>
      <Table
        className="even:bg-gray-100"
        rowSelection={false}
        columnData={colData}
        rowData={filteredRowData}
      ></Table>
    </div>
  );
};
