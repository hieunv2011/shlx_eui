import { useState, useEffect } from "react";
import { useIsWithinBreakpoints } from "@elastic/eui"; // Import hàm kiểm tra kích thước màn hình

// Định nghĩa cột
export const courseColumns = [
  {
    id: "index",
    displayAsText: "STT",
    isResizable: false,
    initialWidth: 45,
  },
  { id: "ma_khoa_hoc", displayAsText: "Mã Khoá",initialWidth:120 },
  { id: "ten_khoa_hoc", displayAsText: "Tên Khoá" },
  { id: "ma_hang_dao_tao", displayAsText: "Hạng" },
  { id: "hang_gplx", displayAsText: "Hạng GP" },
  { id: "so_bci", displayAsText: "Số BCI" },
  { id: "ngay_bci", displayAsText: "Ngày BCI" },
  { id: "ngay_khai_giang", displayAsText: "Khai giảng" },
  { id: "ngay_be_giang", displayAsText: "Bế giảng" },
  { id: "so_hoc_sinh", displayAsText: "Số HS",initialWidth:70 },
  { id: "so_qd_kg", displayAsText: "QĐKG" },
  { id: "thoi_gian_dt", displayAsText: "Thời gian" },
  { id: "status", displayAsText: "Trạng thái",initialWidth:120 },
  { id: "synced", displayAsText: "Đồng bộ",initialWidth:80 },
  { id: "actions", displayAsText: "Thao tác",initialWidth:160,isExpandable:false },
];

// Custom hook để quản lý visibleColumns và handleVisibleColumns
export const useColumnVisibility = () => {
  // Định nghĩa các cột sẽ hiển thị mặc định (ẩn một số cột mặc định)
  const [visibleColumns, setVisibleColumns] = useState([
    "index",
    "ma_khoa_hoc",
    "ten_khoa_hoc",
    "ma_hang_dao_tao",
    "hang_gplx",
    "ngay_khai_giang",
    "ngay_be_giang",
    "so_hoc_sinh",
    "thoi_gian_dt",
    "status",
    "synced",
    "actions"
  ]);

  // const isMobileView = useIsWithinBreakpoints(["xs", "s"]);
  // useEffect(() => {
  //   if (isMobileView) {
  //     setVisibleColumns((prevColumns) =>
  //       prevColumns.filter(
  //         (column) =>
  //           column !== "so_bci" &&
  //           column !== "ngay_bci" &&
  //           column !== "so_qd_kg" &&
  //           column !== "thoi_gian_dt" &&
  //           column !== "actions" &&
  //           column !== "hang_gplx"
  //       )
  //     );

  //     setColumnWidths((prevWidths) =>
  //       Object.keys(prevWidths).reduce((acc, colId) => {
  //         if (
  //           [
  //             "index",
  //             "ma_khoa_hoc",
  //             "ten_khoa_hoc",
  //             "ma_hang_dao_tao",
  //             "ngay_khai_giang",
  //             "ngay_be_giang",
  //             "so_hoc_sinh",
  //             "status",
  //             "synced",
  //           ].includes(colId)
  //         ) {
  //           acc[colId] = 50; // Chiều rộng nhỏ hơn cho màn hình nhỏ
  //         }
  //         return acc;
  //       }, {})
  //     );
  //   } else {
  //     setVisibleColumns([
  //       "index",
  //       "ma_khoa_hoc",
  //       "ten_khoa_hoc",
  //       "ma_hang_dao_tao",
  //       "hang_gplx",
  //       "ngay_khai_giang",
  //       "ngay_be_giang",
  //       "so_hoc_sinh",
  //       "status",
  //       "synced",
  //     ]);
  //   }
  // }, [isMobileView]);

  const handleVisibleColumns = (newVisibleColumns) => {
    setVisibleColumns(newVisibleColumns);
  };

  return { visibleColumns, handleVisibleColumns };
};
