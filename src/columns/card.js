import React from "react";
import {
  EuiHealth,
  EuiButtonIcon,
  EuiToolTip,
  EuiLink,
  EuiBadge,
} from "@elastic/eui";
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";

export const createColumns = (navigateTrainees, pageIndex, pageSize) => [
  {
    field: "id",
    name: "ID thẻ",
    mobileOptions: {
      header: true,
    },
    render: (course, item) => (
      <EuiLink onClick={() => navigateTrainees(item.id)}>{course}</EuiLink>
    ),
  },
  {
    field: "card_num",
    name: "Số thẻ",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "type",
    name: "Loại thẻ",
    align: "center",
    render: (cellValue) => {
      if (cellValue === 2) {
        return <EuiBadge color="#FFA500">Giáo viên</EuiBadge>;
      }
      if (cellValue === 1) {
        return <EuiBadge color="#FEA27F">Học viên</EuiBadge>;;
      }
      return null;
    },
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "status",
    name: "Trạng thái",
    render: (cellValue) => {
      if (cellValue === 0) {
        return <EuiHealth color="subdued">Chưa dùng</EuiHealth>;
      }
      if (cellValue === 1) {
        return <EuiHealth color="primary">Đã dùng</EuiHealth>;
      }
      if (cellValue === -1) {
        return <EuiHealth color="danger">Đã huỷ</EuiHealth>;
      }
      return null;
    },
    mobileOptions: {
      header: true,
    },
    align: "center",
  },
  {
    field: "actions",
    name: "Thao tác",

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
    width: "100px",
    className: "sticky right-0 bg-white",
  },
];
