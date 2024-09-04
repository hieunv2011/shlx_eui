import React, { useState } from "react";
import {
  EuiContext,
  EuiDataGrid,
} from "@elastic/eui";
import { useCourses } from "../hooks/get"; // Hook để lấy dữ liệu

const mappings = {
  en: {
    "euiContext.english": "English",
    "euiContext.french": "French",
    "euiContext.greeting": "Welcome, {name}!",
    "euiContext.guestNo": "You are guest #",
    "euiContext.question": "What is your name?",
    "euiContext.placeholder": "John Doe",
    "euiContext.action": "Submit",
    "euiColumnSelector.selectAll": "Hiển thị tất cả", // Thay đổi token thành 123
  },
};


const Course = () => {
  const { data } = useCourses(); // Sử dụng hook để lấy dữ liệu khóa học
  const courses = data?.items || []; // Lấy mảng items từ dữ liệu trả về, nếu có

  const columns = [
    {
      id: "index",
      displayAsText: "STT",
      isResizable: false,
      initialWidth: 45,
    },
    { id: "ma_khoa_hoc", displayAsText: "Mã Khoá", initialWidth: 120 },
    { id: "ten_khoa_hoc", displayAsText: "Tên Khoá" },
    { id: "ma_hang_dao_tao", displayAsText: "Hạng" },
    { id: "hang_gplx", displayAsText: "Hạng GP" },
    { id: "so_bci", displayAsText: "Số BCI" },
    { id: "ngay_bci", displayAsText: "Ngày BCI" },
    { id: "ngay_khai_giang", displayAsText: "Khai giảng" },
    { id: "ngay_be_giang", displayAsText: "Bế giảng" },
    { id: "so_hoc_sinh", displayAsText: "Số HS", initialWidth: 70 },
    { id: "so_qd_kg", displayAsText: "QĐKG" },
    { id: "thoi_gian_dt", displayAsText: "Thời gian" },
    { id: "status", displayAsText: "Trạng thái", initialWidth: 120 },
    { id: "synced", displayAsText: "Đồng bộ" },
    { id: "actions", displayAsText: "Thao tác" },
  ];

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  return (
    <EuiContext i18n={{ mapping: mappings.en, formatNumber: (value) => new Intl.NumberFormat('en').format(value) }}>
      <EuiDataGrid
        aria-label="DataGrid example"
        columns={columns}
        columnVisibility={{
          visibleColumns: columns.map((col) => col.id),
          setVisibleColumns: () => {},
        }}
        rowCount={courses.length}
        renderCellValue={({ rowIndex, columnId }) => courses[rowIndex][columnId]}
        inMemory={{ level: "sorting" }}
        pagination={{
          ...pagination,
          pageSizeOptions: [5, 10, 20],
          onChangeItemsPerPage: (pageSize) =>
            setPagination((prev) => ({ ...prev, pageSize, pageIndex: 0 })),
          onChangePage: (pageIndex) =>
            setPagination((prev) => ({ ...prev, pageIndex })),
        }}
      />
    </EuiContext>
  );
};

export default Course;
