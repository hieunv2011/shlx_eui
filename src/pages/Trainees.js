import React, { useState, useMemo, useEffect } from "react";
import {
  EuiDataGrid,
  EuiText,
  EuiPageSection,
  EuiOverlayMask,
  EuiButtonIcon,
  EuiPopover,
  useIsWithinBreakpoints,
  EuiHealth,
  EuiToolTip,
  EuiContext,
} from "@elastic/eui";
import { useCourses } from "../hooks/get";
import { format } from "date-fns";
import CourseSearch from "../components/CourseSearch";
import CourseInfo from "../components/CourseInfo";
import { Link } from "react-router-dom";
import { courseColumns, useColumnVisibility } from "../columns/course";

//i18n
const mappings = {
  en: {
    "euiColumnSelector.selectAll": "Hiển thị tất cả",
    "euiColumnSelector.hideAll": "Ẩn tất cả",
    "euiColumnSelector.button": "Lựa chọn dữ liệu hiển thị",
    "euiTablePagination.rowsPerPage": "Số dòng của một trang",
  },
};
// Sample data for the data grid
const data = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  { id: 4, name: "David", age: 40, email: "david@example.com" },
  { id: 5, name: "Eve", age: 28, email: "eve@example.com" },
];

// Define the columns for the data grid
const columns = [
  { id: "id", displayAsText: "ID" },
  { id: "name", displayAsText: "Name" },
  { id: "age", displayAsText: "Age" },
  { id: "email", displayAsText: "Email" },
];
const Trainees = () => {
  //Pagination
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 6 });
  //Responive Datagrid
  const [gridStyle, setGridStyle] = useState({
    cellPadding: "m",
    fontSize: "m",
  });
  const isMobileView = useIsWithinBreakpoints(["xs", "s"]);
  useEffect(() => {
    if (isMobileView) {
      setGridStyle({
        cellPadding: "s",
        fontSize: "s",
      });
    } else {
      setGridStyle({
        cellPadding: "m",
        fontSize: "m",
      });
    }
  }, [isMobileView]);
  //Popover State
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  // Column Visible
  const { visibleColumns, columnWidths, handleVisibleColumns } =
    useColumnVisibility();

  //Params Search
  const [searchParams, setSearchParams] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  //Datagrid row height
  const rowHeightsOptions = useMemo(
    () => ({
      defaultHeight: {
        lineCount: 2,
      },
      lineHeight: "2em",
    }),
    []
  );

  //Open Modal
  const handleModalOpen = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  //Data fetch
  const { data: coursesData, error, isLoading } = useCourses(searchParams);
  if (error) {
    return <EuiText color="danger">Error loading courses</EuiText>;
  }
  const courses = Array.isArray(coursesData?.items) ? coursesData.items : [];

  //Column & row data grid
  const rowData = courses.map((item, index) => ({
    index: index + 1,
    ma_khoa_hoc: <Link>{item.ma_khoa_hoc}</Link>,
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
      <>
        <EuiToolTip position="top" content={`Chỉnh sửa thông tin ${item.ten_khoa_hoc}`}>
          <EuiButtonIcon
            iconType="documentEdit"
            aria-label="Thao tác"
            size="s"
            onClick={() => handleModalOpen(item)}
            color="primary"
            className="bg-blue-100 mx-2"
          />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Đồng bộ kết thúc khoá ${item.ten_khoa_hoc}`}>
        <EuiButtonIcon
          iconType="push"
          aria-label="Đồng bộ"
          size="s"
          onClick={() => handleModalOpen(item)}
          color="danger"
          className="bg-red-100 mx-2"
        />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Xoá khoá học ${item.ten_khoa_hoc}`}>
        <EuiButtonIcon
          iconType="cross"
          aria-label="Huỷ"
          size="s"
          onClick={() => handleModalOpen(item)}
          color="success"
          className="bg-green-100 mx-2"
        />
        </EuiToolTip>
      </>
    ),
  }));
  const renderCellValue = ({ rowIndex, columnId }) => {
    const cellValue = rowData[rowIndex][columnId];
    if (columnId === "status") {
      if (cellValue === 3)
        return <EuiHealth color="#FF0000">Kết thúc</EuiHealth>;
      if (cellValue === 2)
        return <EuiHealth color="#008000">Đang diễn ra</EuiHealth>;
      if (cellValue === 0)
        return <EuiHealth color="#0000FF">Chưa diễn ra</EuiHealth>;
    }
    return cellValue;
  };

  //Custom header datagrid
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
      <CourseSearch
        onSearch={(params) => setSearchParams(params)}
        className=""
      />
      <EuiPageSection>
        <EuiContext
          i18n={{
            mapping: mappings.en,
            formatNumber: (value) => new Intl.NumberFormat("en").format(value),
          }}
        >
          <EuiDataGrid
            aria-label="Courses Data Grid"
            columns={courseColumns}
            columnVisibility={{
              visibleColumns: visibleColumns,
              setVisibleColumns: handleVisibleColumns,
            }}
            rowCount={rowData.length}
            renderCellValue={renderCellValue}
            inMemory={{ level: "sorting" }}
            // pagination={{
            //   pageIndex: 0,
            //   pageSize: 10,
            //   pageSizeOptions: [10, 20, 50],
            //   onChangePage: () => {},
            //   onChangeItemsPerPage: () => {},
            // }}
            pagination={{
              ...pagination,
              pageSizeOptions: [6, 10, 20],
              onChangeItemsPerPage: (pageSize) =>
                setPagination((prev) => ({ ...prev, pageSize, pageIndex: 0 })),
              onChangePage: (pageIndex) =>
                setPagination((prev) => ({ ...prev, pageIndex })),
            }}
            toolbarVisibility={{
              showColumnSelector: {
                allowHide: true,
                allowReorder: true,
              },
              showKeyboardShortcuts: false,
              showFullScreenSelector: true,
              showDisplaySelector: false,
              additionalControls: {
                left: (
                  <EuiPopover
                    button={button}
                    isOpen={isPopoverOpen}
                    closePopover={closePopover}
                  >
                    <EuiText style={{ width: 200 }} size="s">
                      <p>Sử dụng để ẩn hiện các cột chứa dữ liệu mong muốn</p>
                    </EuiText>
                  </EuiPopover>
                ),
              },
            }}
            rowHeightsOptions={rowHeightsOptions}
            gridStyle={gridStyle}
          />
        </EuiContext>
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


