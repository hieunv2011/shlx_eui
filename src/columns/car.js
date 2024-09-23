import React from "react";
import { EuiHealth, EuiButtonIcon, EuiToolTip, EuiLink } from "@elastic/eui";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const createColumns = (navigateTrainees) => [
  {
    field: "plate",
    name: "Biển số",
    mobileOptions: {
      header: true,
    },
    width: "100px",
    render: (course, item) => (
      <EuiLink onClick={() => navigateTrainees(item.id)}>{course}</EuiLink>
    ),
  },
  {
    field: "modal",
    name: "Model",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "hand",
    name: "Hạng",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "type",
    name: "Loại",
    // render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "color",
    name: "Màu sắc",
    // render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "gptl",
    name: "Số GPTL",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "gptl_expired_date",
    name: "Ngày hết hạn GPTL",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "manufacture_year",
    name: "Năm SX",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "so_hoc_sinh",
    name: "Mô tả",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "device_name",
    name: "Thiết bị",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "device_serial",
    name: "IMEI",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "device_sim",
    name: "SIM",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "last_updated",
    name: "Cập nhật",

    mobileOptions: {
      header: true,
    },
  },
  {
    field: "synced",
    name: "Đồng bộ",
    width:"65px",
    align:"center",
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
