import React, { useState, useEffect } from "react";
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
import { useDat } from "../hooks/get";
import {
  TraineesSearch,
  DatModal,
  DatSearch,
  DatAddNew
} from "../components";
import { createColumns } from "../columns/dat";
import { useParams } from "react-router-dom";

const Dat = () => {
  // const { data } = useTrainees();
  // const trainees = data?.items || [];
  //test
  const { course_id } = useParams();
  // console.log(course_id);

  const [searchParams, setSearchParams] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  useEffect(() => {
    if (course_id) {
      setSearchParams((prevParams) => ({
        ...prevParams,
        course_id: course_id,
      }));
    }
  }, [course_id]);
  const { data: datData, error, isLoading,refetch } = useDat(searchParams);
  const dat = Array.isArray(datData?.items) ? datData.items : [];
  // console.log(dat);
  
  //Open Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);

  const [selectedDat, setSelectedDat] = useState("");
  const [selectedDatId, setSelectedDatId] = useState("");
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
  const paginatedDat = dat.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: dat.length,
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
            <DatSearch
              onSearch={(params) => setSearchParams(params)}
              showAddNew={showAddNew}
              className=""
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
        <EuiHideFor sizes={["xs", "s", "m", "l"]}>
          <DatSearch
            onSearch={(params) => setSearchParams(params)}
            showAddNew={showAddNew}
            className=""
          />
        </EuiHideFor>
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel paddingSize="m">
        <EuiBasicTable
          items={paginatedDat}
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
      <DatAddNew
        isModalVisible={isAddNewVisible}
        closeModal={closeAddNew}
      />
    </EuiContext>
  );
};

export default Dat;
