import React, { useState, useMemo, useEffect } from "react";
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
  EuiProvider,
  EuiShowFor,
  EuiHideFor,
  useIsWithinBreakpoints,
  EuiHealth,
} from "@elastic/eui";
import { useCourses } from "../hooks/get";
import { format } from "date-fns";
import CourseSearch from "../components/CourseSearch";
import CourseInfo from "../components/CourseInfo";
import { Link } from "react-router-dom";
import { courseColumns, useColumnVisibility } from "../columns/course";

const Trainees = () => {
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

  //Column Visible
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
      if (cellValue === 3)
        return <EuiHealth color="#FF0000">Kết thúc</EuiHealth>;
      if (cellValue === 2)
        return <EuiHealth color="#008000">Đang diễn ra</EuiHealth>;
      if (cellValue === 0)
        return <EuiHealth color="#0000FF">Inactive</EuiHealth>;
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
      <EuiSpacer />
      {/* <EuiHideFor 
      sizes={["xs", "s"]}>
        <CourseSearch onSearch={(params) => setSearchParams(params)} />
      </EuiHideFor> */}
      <CourseSearch
        onSearch={(params) => setSearchParams(params)}
        className=""
      />
      <EuiPageSection>
        <div className="w-full overflow-auto border rounded-lg">
          <EuiDataGrid
            aria-label="Courses Data Grid"
            columns={courseColumns.map((col) => ({
              id: col.id,
              displayAsText: col.displayAsText,
              isResizable: false,
              isExpandable: false,
              initialWidth: columnWidths[col.id], // Sử dụng chiều rộng điều chỉnh
            }))}
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
                      <p>Sử dụng nút Columns để ẩn hiện các cột mong muốn</p>
                    </EuiText>
                  </EuiPopover>
                ),
              },
            }}
            rowHeightsOptions={rowHeightsOptions}
            gridStyle={gridStyle}
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
