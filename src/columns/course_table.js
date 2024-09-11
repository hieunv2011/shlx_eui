import React from "react";
import { EuiHealth, EuiButtonIcon, EuiToolTip, EuiLink } from "@elastic/eui";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const createColumns = (navigateTrainees) => [
  {
    field: "ma_khoa_hoc",
    name: "Mã Khoá",
    mobileOptions: {
      header: true,
    },
    width: "150px",
    render: (course, item) => (
      <EuiLink onClick={() => navigateTrainees(item.id)}>{course}</EuiLink>
    ),
  },
  {
    field: "ten_khoa_hoc",
    name: "Tên Khoá",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "ma_hang_dao_tao",
    name: "Hạng",
    align: "center",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "ngay_khai_giang",
    name: "Khai giảng",
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "ngay_be_giang",
    name: "Bế giảng",
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "so_hoc_sinh",
    name: "Số HS",
    align: "center",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "status",
    name: "Trạng thái",
    render: (cellValue) => {
      if (cellValue === 3)
        return <EuiHealth color="#FF0000">Kết thúc</EuiHealth>;
      if (cellValue === 2)
        return <EuiHealth color="#008000">Đang diễn ra</EuiHealth>;
      if (cellValue === 0)
        return <EuiHealth color="#0000FF">Chưa diễn ra</EuiHealth>;
      return null; // Trường hợp không khớp với bất kỳ giá trị nào ở trên
    },
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "synced",
    name: "Đồng bộ",
    align: "center",
    render: (cellValue) => {
      if (cellValue === true) {
        return (
          <EuiButtonIcon
            iconType="check"
            aria-label="Đồng bộ"
            size="l"
            color="success"
          />
        );
      }
      if (cellValue === false) {
        return (
          <EuiButtonIcon
            iconType="cross"
            aria-label="Không đồng bộ"
            size="l"
            color="danger"
          />
        );
      }
      return null;
    },
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "actions",
    name: "Thao tác",
    align: "center",
    render: (item) => (
      <div className="flex">
        <EuiToolTip position="top" content={`Chỉnh sửa thông tin`}>
          <EuiButtonIcon
            iconType="documentEdit"
            aria-label="Chỉnh sửa"
            size="s"
            // onClick={() => handleModalOpen(item)}
            color="primary"
            className="bg-blue-100 mx-2"
          />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Đồng bộ kết thúc khoá`}>
          <EuiButtonIcon
            iconType="push"
            aria-label="Đồng bộ"
            size="s"
            // onClick={() => handleModalOpen(item)}
            color="danger"
            className="bg-red-100 mx-2"
          />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Xoá khoá học`}>
          <EuiButtonIcon
            iconType="cross"
            aria-label="Xoá"
            size="s"
            // onClick={() => handleModalOpen(item)}
            color="success"
            className="bg-green-100 mx-2"
          />
        </EuiToolTip>
      </div>
    ),
    mobileOptions: {
      header: true,
    },
    width: "120px",
    className: "sticky right-0 bg-white",
  },
];
