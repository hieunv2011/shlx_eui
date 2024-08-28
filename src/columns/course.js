// // src/columns/courseColumns.js
// import { useState, useEffect } from "react";
// import { useIsWithinBreakpoints } from "@elastic/eui"; // Import hàm kiểm tra kích thước màn hình

// // Định nghĩa cột
// export const courseColumns = [
//   {
//     id: "index",
//     displayAsText: "STT",
//     isResizable: false,
//     initialWidth: 50,
//   },
//   { id: "ma_khoa_hoc", displayAsText: "Mã Khoá", isExpandable: false },
//   { id: "ten_khoa_hoc", displayAsText: "Tên Khoá", isExpandable: false },
//   { id: "ma_hang_dao_tao", displayAsText: "Hạng", isExpandable: false },
//   { id: "hang_gplx", displayAsText: "Hạng GP", isExpandable: false },
//   { id: "so_bci", displayAsText: "Số BCI", isExpandable: false },
//   { id: "ngay_bci", displayAsText: "Ngày BCI", isExpandable: false },
//   { id: "ngay_khai_giang", displayAsText: "Khai giảng", isExpandable: false },
//   { id: "ngay_be_giang", displayAsText: "Bế giảng", isExpandable: false },
//   { id: "so_hoc_sinh", displayAsText: "Số HS", isExpandable: false },
//   { id: "so_qd_kg", displayAsText: "QĐKG", isExpandable: false },
//   { id: "thoi_gian_dt", displayAsText: "Thời gian", isExpandable: false },
//   { id: "status", displayAsText: "Trạng thái", isExpandable: false },
//   { id: "synced", displayAsText: "Đồng bộ", isExpandable: false },
//   { id: "actions", displayAsText: "Thao tác", isExpandable: false },
// ];

// // Custom hook để quản lý visibleColumns và handleVisibleColumns
// export const useColumnVisibility = () => {
//   const [visibleColumns, setVisibleColumns] = useState(
//     courseColumns.map(({ id }) => id)
//   );
//   const isMobileView = useIsWithinBreakpoints(["xs", "s"]); // Kiểm tra xem kích thước màn hình là xs hoặc s

//   useEffect(() => {
//     if (isMobileView) {
//       setVisibleColumns((prevColumns) =>
//         prevColumns.filter(
//           (column) =>
//             column !== "so_bci" &&
//             column !== "ngay_bci" &&
//             column !== "so_qd_kg" &&
//             column !== "thoi_gian_dt" &&
//             column !== "actions"
//         )
//       );
//     } else {
//       setVisibleColumns(courseColumns.map(({ id }) => id));
//     }
//   }, [isMobileView]);

//   const handleVisibleColumns = (newVisibleColumns) => {
//     setVisibleColumns(newVisibleColumns);
//   };

//   return { visibleColumns, handleVisibleColumns };
// };
// src/columns/courseColumns.js
import { useState, useEffect } from "react";
import { useIsWithinBreakpoints } from "@elastic/eui"; // Import hàm kiểm tra kích thước màn hình

// Định nghĩa cột
export const courseColumns = [
  {
    id: "index",
    displayAsText: "STT",
    // isResizable: false,
    initialWidth: 50,
  },
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

// Custom hook để quản lý visibleColumns và handleVisibleColumns
export const useColumnVisibility = () => {
  const [visibleColumns, setVisibleColumns] = useState(
    courseColumns.map(({ id }) => id)
  );
  const [columnWidths, setColumnWidths] = useState(
    courseColumns.reduce((acc, col) => ({ ...acc, [col.id]: 150 }), {}) // Chiều rộng mặc định
  );
  const isMobileView = useIsWithinBreakpoints(["xs", "s"]); // Kiểm tra xem kích thước màn hình là xs hoặc s

  useEffect(() => {
    if (isMobileView) {
      setVisibleColumns((prevColumns) =>
        prevColumns.filter(
          (column) =>
            column !== "so_bci" &&
            column !== "ngay_bci" &&
            column !== "so_qd_kg" &&
            column !== "thoi_gian_dt" &&
            column !== "actions"
        )
      );

      setColumnWidths((prevWidths) =>
        Object.keys(prevWidths).reduce((acc, colId) => {
          if (["index","ma_khoa_hoc", "ten_khoa_hoc", "ma_hang_dao_tao", "hang_gplx", "ngay_khai_giang", "ngay_be_giang", "so_hoc_sinh", "status", "synced"].includes(colId)) {
            acc[colId] = 50; // Chiều rộng nhỏ hơn cho màn hình nhỏ
          }
          return acc;
        }, {})
      );
    } else {
      setVisibleColumns(courseColumns.map(({ id }) => id));
      setColumnWidths(courseColumns.reduce((acc, col) => ({ ...acc, [col.id]: 100 }), {})); // Chiều rộng mặc định
    }
  }, [isMobileView]);

  const handleVisibleColumns = (newVisibleColumns) => {
    setVisibleColumns(newVisibleColumns);
  };

  return { visibleColumns, columnWidths, handleVisibleColumns };
};
