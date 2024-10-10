import React, { useState } from "react";
import {
  EuiContext,
  EuiSpacer,
  EuiBasicTable,
  EuiCollapsibleNavGroup,
  EuiShowFor,
  EuiHideFor,
  EuiPanel,
  EuiText
} from "@elastic/eui";
import { useCourses } from "../hooks/get";
import CardSearch from "../components/Card/CardSearch";
import { createColumns } from "../columns/card";
import { useNavigate } from "react-router-dom";

import { useCard } from "../hooks/get";

const Card = () => {
  // const { data } = useCourses();
  // const courses = data?.items || [];
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({});
  const [isResponsive, setIsResponsive] = useState(true);
  
  //Pagination
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const { data: coursesData, error, isLoading } = useCard(searchParams);
  console.log(coursesData);
  if (isLoading)
  {
    return <EuiText color="danger">Loading</EuiText>;
  }
  if (error) {
    return <EuiText color="danger">Error loading courses</EuiText>;
  }
  const courses = Array.isArray(coursesData?.items) ? coursesData.items : [];

  //Navigation and Columns
  const navigateTrainees = (courseId) => {
    navigate(`/trainees/${courseId}`);
  };
  const columns = createColumns(navigateTrainees);

  const onTableChange = ({ page }) => {
    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };


  const paginatedCourses = courses.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: courses.length,
    pageSizeOptions: [10, 20],
    showPerPageOptions,
  };
  //i18n
  const mappings = {
    en: {
      "euiTablePagination.rowsPerPageOption": "{rowsPerPage} dòng",
      "euiTablePagination.rowsPerPage": "Số dòng của một trang",
    },
  };

  return (
    <EuiContext
      i18n={{
        mapping: mappings.en,
        formatNumber: (value) => new Intl.NumberFormat("en").format(value),
      }}
    >
      <EuiPanel paddingSize="m">
        <EuiShowFor sizes={["xs", "s", "m", "l"]}>
          <EuiCollapsibleNavGroup
            title="Tìm kiếm"
            iconType="logoGCPMono"
            iconSize="l"
            titleSize="s"
            isCollapsible={true}
            initialIsOpen={false}
          >
            <CardSearch
              onSearch={(params) => setSearchParams(params)}
              className=""
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
        <EuiHideFor sizes={["xs", "s", "m", "l"]}>
          <CardSearch
            onSearch={(params) => setSearchParams(params)}
            className=""
          />
        </EuiHideFor>
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel paddingSize="m">
        <EuiBasicTable
          items={paginatedCourses}
          itemId="id"
          columns={columns} // Sử dụng columns từ file đã import
          pagination={pagination}
          onChange={onTableChange}
          // responsive={isResponsive}
          className=""
        />
      </EuiPanel>
    </EuiContext>
  );
};

export default Card;
