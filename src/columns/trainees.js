import React from "react";
import {
  EuiHealth,
  EuiButtonIcon,
  EuiToolTip,
  EuiAvatar,
  EuiText,
  EuiLink,
} from "@elastic/eui";
import { format } from "date-fns";
import { render } from "@testing-library/react";

export const columns = [
  {
    field: "so_tt",
    name: "STT",
    mobileOptions: {
      header: true,
    },
    width: "50px",
    align: "center",
  },
  {
    field: "anh_chan_dung",
    name: "",
    render: (cellValue) => {
      return <EuiAvatar size="l" name="Cat" imageUrl={cellValue} />;
    },
    mobileOptions: {
      header: true,
    },
    width: "50px",
  },
  {
    field: "ho_va_ten",
    name: "Họ và tên",
    render: (cellValue) => {
      return <EuiLink>{cellValue}</EuiLink>;
    },
    mobileOptions: {
      header: true,
    },
    width: "200px",
  },
  {
    field: "ma_dk",
    name: "Mã ĐK",
    mobileOptions: {
      header: true,
    },
    width: "200px",
  },
  {
    field: "hang_daotao",
    name: "Hạng đào tạo",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "ngay_sinh",
    name: "Ngày sinh",
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "gioi_tinh",
    name: "Giới tính",
    render: (cellValue) => {
      if (cellValue === "F") return <EuiText>Nữ</EuiText>;
      if (cellValue === "M") return <EuiText>Nam</EuiText>;
    },
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "so_cmt",
    name: "Số CMT",
    align: "center",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "rfid_card",
    name: "ID thẻ",
    align: "center",
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
