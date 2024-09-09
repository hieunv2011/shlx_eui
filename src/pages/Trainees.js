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
  EuiPanel,
  EuiSplitPanel,
  EuiResizableContainer,
  EuiButton,
} from "@elastic/eui";
import { useTrainees } from "../hooks/get";
import CourseSearch from "../components/Course/CourseSearch";
import { columns } from "../columns/trainees";

const textPart1 = (
  <>
    <p>Đây là nội dung phần 1.</p>
  </>
);

const textPart2 = (
  <>
    <p>Đây là nội dung phần 2.</p>
  </>
);

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
    pageSizeOptions: [10, 20, 30],
    showPerPageOptions,
  };
  //i18n
  const mappings = {
    en: {
      "euiTablePagination.rowsPerPageOption": "{rowsPerPage} dòng",
      "euiTablePagination.rowsPerPage": "Số dòng của một trang",
    },
  };

  const [showPart2, setShowPart2] = useState(false);

  const togglePart2 = () => {
    setShowPart2(!showPart2);
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
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel paddingSize="m">
        <EuiBasicTable
          items={paginatedCourses}
          itemId="id"
          columns={columns}
          pagination={pagination}
          onChange={onTableChange}
          className="overflow-auto px-4"
          tableLayout="fixed"
        />
      </EuiPanel>
      <EuiSplitPanel.Outer direction="row">
        <EuiSplitPanel.Inner color="danger">1</EuiSplitPanel.Inner>
        <EuiSplitPanel.Inner color="success">2</EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
      <>
        {!showPart2 ? (
          // Hiển thị chỉ phần 1 nếu chưa có phần 2
          <div style={{ height: "200px" }} className="bg-red-400">
            <EuiText>
              <div>{textPart1}</div>
              <EuiButton onClick={togglePart2}>Hiển Thị Phần 2</EuiButton>
            </EuiText>
          </div>
        ) : (
          // Khi phần 2 hiển thị, dùng EuiResizableContainer
          <EuiResizableContainer style={{ height: "200px" }}>
            {(EuiResizablePanel, EuiResizableButton) => (
              <>
                <EuiResizablePanel initialSize={50} minSize="30%" tabIndex={0}>
                  <EuiText>
                    <div>{textPart1}</div>
                  </EuiText>
                </EuiResizablePanel>
                <EuiResizableButton />
                <EuiResizablePanel
                  initialSize={50}
                  minSize="200px"
                  tabIndex={0}
                >
                  <EuiText>{textPart2}</EuiText>
                  <EuiButton
                    onClick={togglePart2}
                    style={{ marginTop: "10px" }}
                  >
                    Ẩn Phần 2
                  </EuiButton>
                </EuiResizablePanel>
              </>
            )}
          </EuiResizableContainer>
        )}
      </>
    </EuiContext>
  );
};

export default Trainees;
