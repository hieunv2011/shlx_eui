import React, { useState, useEffect } from "react";
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
import { useTeacher } from "../hooks/get";
import {
  DatModal,
  DatSearch,
} from "../components";
import { createColumns } from "../columns/teacher";
import { useParams } from "react-router-dom";
import TeacherAddNew from "../components/Teacher/TeacherAddNew";
import TeacherSearch from "../components/Teacher/TeacherSearch";

const Teacher = () => {
  const [searchParams, setSearchParams] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);
  //Open Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);
  
  const [selectedDat, setSelectedDat] = useState("");
  const [selectedDatId, setSelectedDatId] = useState("");

  const { data: teacherData, error, isLoading, refetch } = useTeacher(searchParams);
  if (isLoading) {
    return <EuiText color="danger">Loading</EuiText>;
  }
  if (error) {
    return <EuiText color="danger">Error loading courses</EuiText>;
  }
  // console.log(teacherData);
  const teacher = Array.isArray(teacherData?.items) ? teacherData.items : [];
  // console.log(dat);

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedDat("");  // Reset selected data
    setSelectedDatId(""); // Reset selected data ID
  };
  const showModal = (dat) => {
    setSelectedDat(dat);
    setSelectedDatId(dat.id);
    setIsModalVisible(true);
  };

  const closeAddNew = () => {
    setIsAddNewVisible(false);
  };
  const showAddNew = () => {
    setIsAddNewVisible(true);
  };

  //Logic Table
  const columns = createColumns(showModal);
  const onTableChange = ({ page }) => {
    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };

  const togglePerPageOptions = () => setShowPerPageOptions(!showPerPageOptions);
  const paginatedTeacher = teacher.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: teacher.length,
    pageSizeOptions: [10, 20, 30],
    showPerPageOptions,
  };
  //i18n
  const mappings = {
    en: {
      "euiTablePagination.rowsPerPageOption": "{rowsPerPage} dòng",
      "euiTablePagination.rowsPerPage": "Số dòng của một trang",
      "euiBasicTable.noItemsMessage": "Đang tải dữ liệu ... ",
    },
  };

  const refreshData = () => {
    refetch(); // Gọi refetch để lấy lại dữ liệu mới từ API
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
            <TeacherSearch
              onSearch={(params) => setSearchParams(params)}
              showAddNew={showAddNew}
              className=""
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
        <EuiHideFor sizes={["xs", "s", "m", "l"]}>
          <TeacherSearch
            onSearch={(params) => setSearchParams(params)}
            showAddNew={showAddNew}
            className=""
          />
        </EuiHideFor>
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel paddingSize="m">
        <EuiBasicTable
          items={paginatedTeacher}
          itemId="id"
          columns={columns}
          pagination={pagination}
          onChange={onTableChange}
          className="overflow-auto px-4"
          tableLayout="fixed"
        />
      </EuiPanel>
      <DatModal
        dat={selectedDat}
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        datId={selectedDatId}
        refreshData={refreshData}
      />
      <TeacherAddNew
        isModalVisible={isAddNewVisible}
        closeModal={closeAddNew}
      />
    </EuiContext>
  );
};

export default Teacher;
