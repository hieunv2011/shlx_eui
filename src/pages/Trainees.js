import React, { useState, useMemo } from "react";
import {
  EuiDataGrid,
  EuiLoadingSpinner,
  EuiText,
  EuiPageSection,
  EuiOverlayMask,
  EuiSpacer,
  EuiButtonIcon,
  EuiI18n,
  EuiPopover,
} from "@elastic/eui";
import { useCourses } from "../hooks/get";
import { format } from "date-fns";
import CourseSearch from "../components/CourseSearch";
import CourseInfo from "../components/CourseInfo";
const columns = [
  { id: "index", displayAsText: "STT", isExpandable: false },
  { id: "ma_khoa_hoc", displayAsText: "Mã Khoá", isExpandable: false },
  { id: "ten_khoa_hoc", displayAsText: "Tên Khoá", isExpandable: false },
  { id: "ma_hang_dao_tao", displayAsText: "Hạng", isExpandable: false },
  { id: "hang_gplx", displayAsText: "Hạng GP", isExpandable: false },
  { id: "so_bci", displayAsText: "Số BCI", isExpandable: false },
  { id: "ngay_bci", displayAsText: "Ngày BCI", isExpandable: false },
  { id: "ngay_khai_giang", displayAsText: "Khai giảng", isExpandable: false },
  { id: "ngay_be_giang", displayAsText: "Bế giảng", isExpandable: false },
  { id: "so_hoc_sinh", displayAsText: "Số HS", isExpandable: false },
  { id: "so_qd_kg", displayAsText: "QĐKG", isExpandable: false },
  { id: "thoi_gian_dt", displayAsText: "Thời gian", isExpandable: false },
  { id: "status", displayAsText: "Trạng thái", isExpandable: false },
  { id: "synced", displayAsText: "Đồng bộ", isExpandable: false },
  { id: "actions", displayAsText: "Thao tác", isExpandable: false },
];
const Trainees = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const [visibleColumns, setVisibleColumns] = useState(
    columns.map(({ id }) => id)
  );
  const handleVisibleColumns = (visibleColumns) =>
    setVisibleColumns(visibleColumns);


  const [searchParams, setSearchParams] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const rowHeightsOptions = useMemo(
    () => ({
      defaultHeight: {
        lineCount: 2, // default every row to 3 lines of text
      },
      lineHeight: "2em", // default every cell line-height to 2em
    }),
    []
  );

  const handleModalOpen = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const { data: coursesData, error, isLoading } = useCourses(searchParams);

  if (error) {
    return <EuiText color="danger">Error loading courses</EuiText>;
  }

  const courses = Array.isArray(coursesData?.items) ? coursesData.items : [];

  const rowData = courses.map((item, index) => ({
    index: index + 1,
    ma_khoa_hoc: item.ma_khoa_hoc,
    ten_khoa_hoc: item.ten_khoa_hoc,
    ma_hang_dao_tao: item.ma_hang_dao_tao,
    hang_gplx: item.hang_gplx,
    so_bci: item.so_bci,
    ngay_bci: format(new Date(item.ngay_bci), "dd/MM/yyyy"),
    ngay_khai_giang: format(new Date(item.ngay_khai_giang), "dd/MM/yyyy"),
    ngay_be_giang: format(new Date(item.ngay_be_giang), "dd/MM/yyyy"),
    so_hoc_sinh: item.so_hoc_sinh,
    so_qd_kg: item.so_qd_kg,
    thoi_gian_dt: item.thoi_gian_dt,
    status: item.status,
    synced: item.synced,
    actions: (
      <EuiButtonIcon
        iconType="menu"
        aria-label="Thao tác"
        size="m"
        color="black"
        onClick={() => handleModalOpen(item)}
      />
    ),
  }));

  const renderCellValue = ({ rowIndex, columnId }) => {
    const cellValue = rowData[rowIndex][columnId];
    if (columnId === "status") {
      if (cellValue === 3) return <h2>Kết thúc</h2>;
      if (cellValue === 2) return <h2>Học thực hành 1234</h2>;
      if (cellValue === 0) return <h2>Chưa diễn ra</h2>;
    }
    return cellValue;
  };

  const button = (
    <EuiButtonIcon
      iconType="documentation"
      iconSide="right"
      onClick={onButtonClick}
    >
      How it works
    </EuiButtonIcon>
  );

  return (
    <>
      <EuiSpacer />
      <CourseSearch onSearch={(params) => setSearchParams(params)} />
      <EuiPageSection className="">
        <div className="w-full overflow-auto border rounded-lg">
          <EuiDataGrid
            aria-label="Courses Data Grid"
            columns={columns}
            columnVisibility={{
              visibleColumns: visibleColumns,
              setVisibleColumns: handleVisibleColumns,
            }}
            rowCount={rowData.length}
            renderCellValue={renderCellValue}
            inMemory={{ level: "sorting" }}
            pagination={{
              pageIndex: 0,
              pageSize: 10,
              pageSizeOptions: [10, 20, 50],
              onChangePage: () => {},
              onChangeItemsPerPage: () => {},
            }}
            toolbarVisibility={{
              showColumnSelector: {
                allowHide: true,
                allowReorder: true,
              },
              showKeyboardShortcuts: false,
              showFullScreenSelector: false,
              showDisplaySelector: false,
              additionalControls: {
                left: (
                  <EuiPopover
                    button={button}
                    isOpen={isPopoverOpen}
                    closePopover={closePopover}
                  >
                    <EuiText style={{ width: 200 }} size="s">
                      <p>
                      Sử dụng nút Columns để ẩn hiện các cột mong muốn
                      </p>
                    </EuiText>
                  </EuiPopover>
                ),
              },
            }}
            rowHeightsOptions={rowHeightsOptions}
          />
        </div>
      </EuiPageSection>
      {showModal && (
        <EuiOverlayMask>
          <CourseInfo
            closeModal={() => setShowModal(false)}
            item={selectedItem}
          />
        </EuiOverlayMask>
      )}
    </>
  );
};

export default Trainees;
