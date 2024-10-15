import React, { useState, useEffect } from "react";
import {
  EuiContext,
  EuiSpacer,
  EuiBasicTable,
  EuiCollapsibleNavGroup,
  EuiShowFor,
  EuiHideFor,
  EuiPanel,
} from "@elastic/eui";
import { useSession } from "../hooks/get";
import { DatModal, DatSearch, DatAddNew } from "../components";
import { createColumns } from "../columns/session";
import { useParams } from "react-router-dom";
import SessionSearch from "../components/Session/SessionSearch";

const Session = () => {
  const { course_id } = useParams();
  const [searchParams, setSearchParams] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);
  const [selectedDat, setSelectedDat] = useState("");
  const [selectedDatId, setSelectedDatId] = useState("");
  useEffect(() => {
    if (course_id) {
      setSearchParams((prev) => ({ ...prev, course_id }));
    }
  }, [course_id]);

  const { data: datData, refetch } = useSession(searchParams);
  const dat = Array.isArray(datData) ? datData : [];

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedDat("");
    setSelectedDatId("");
  };

  const showModal = (dat) => {
    setSelectedDat(dat);
    setSelectedDatId(dat.id);
    setIsModalVisible(true);
  };

  const closeAddNew = () => setIsAddNewVisible(false);
  const showAddNew = () => setIsAddNewVisible(true);

  const columns = createColumns(showModal);
  const onTableChange = ({ page }) => {
    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };

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

  const refreshData = () => refetch();

  const mappings = {
    en: {
      "euiTablePagination.rowsPerPageOption": "{rowsPerPage} dòng",
      "euiTablePagination.rowsPerPage": "Số dòng của một trang",
      "euiBasicTable.noItemsMessage": "Đang tải dữ liệu ... ",
    },
  };

  return (
    <EuiContext
      i18n={{
        mapping: mappings.en,
        formatNumber: (value) =>
          new Intl.NumberFormat("en").format(value),
      }}
    >
      <EuiPanel paddingSize="m">
        <EuiShowFor sizes={["xs", "s", "m", "l"]}>
          <EuiCollapsibleNavGroup
            title="Tìm kiếm"
            iconType="logoGCPMono"
            iconSize="l"
            titleSize="s"
            isCollapsible
            initialIsOpen={false}
          >
            <SessionSearch
              onSearch={(params) => setSearchParams(params)}
              showAddNew={showAddNew}
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
        <EuiHideFor sizes={["xs", "s", "m", "l"]}>
          <SessionSearch
            onSearch={(params) => setSearchParams(params)}
            showAddNew={showAddNew}
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

export default Session;
