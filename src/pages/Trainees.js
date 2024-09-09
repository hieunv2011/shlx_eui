import React, { useState } from "react";
import {
  EuiContext,
  EuiSpacer,
  EuiBasicTable,
  EuiCollapsibleNavGroup,
  EuiShowFor,
  EuiHideFor,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { useTrainees } from "../hooks/get";
import CourseSearch from "../components/Course/CourseSearch";
import { columns } from "../columns/trainees";

const Trainees = () => {
  const { data } = useTrainees();
  console.log(data);
  const courses = data?.items || [];
  const [searchParams, setSearchParams] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const onTableChange = ({ page }) => {
    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };

  const togglePerPageOptions = () => setShowPerPageOptions(!showPerPageOptions);
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
      <EuiShowFor sizes={["xs", "s", "m", "l"]}>
        <EuiCollapsibleNavGroup
          title="Tìm kiếm"
          iconType="logoGCPMono"
          iconSize="l"
          titleSize="s"
          isCollapsible={true}
          initialIsOpen={false}
        >
          <CourseSearch
            onSearch={(params) => setSearchParams(params)}
            className=""
          />
        </EuiCollapsibleNavGroup>
      </EuiShowFor>
      <EuiHideFor sizes={["xs", "s", "m", "l"]}>
        <CourseSearch
          onSearch={(params) => setSearchParams(params)}
          className=""
        />
      </EuiHideFor>
      <EuiSpacer size="s" />
      <EuiBasicTable
        items={paginatedCourses}
        itemId="id"
        columns={columns}
        pagination={pagination}
        onChange={onTableChange}
        className="overflow-auto px-4"
      />
    </EuiContext>
  );
};

export default Trainees;
