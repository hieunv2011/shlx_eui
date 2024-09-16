import React from "react";
import {
  EuiHealth,
  EuiButtonIcon,
  EuiToolTip,
  EuiAvatar,
  EuiText,
  EuiLink,
  EuiProvider,
} from "@elastic/eui";
// import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// Chỉnh sửa để nhận hàm `showModal` từ component cha
export const createColumns = (
  showModal,
) => [
  // {
  //   field: "so_tt",
  //   name: "STT",
  //   mobileOptions: {
  //     header: true,
  //   },
  //   width: "50px",
  //   align: "center",
  // },
  {
    field: "name",
    name: "Tên thiết bị",
    render: (trainee, item) => (
      <EuiLink onClick={() => showModal(item)}>{trainee}</EuiLink>
    ),
    mobileOptions: {
      header: true,
    },
    width: "120px",
  },
  {
    field: "serial_no",
    name: "Số IMEI",
    mobileOptions: {
      header: true,
    },
    width: "160px",
  },
  {
    field: "board_serial",
    name: "Board Serial",
    mobileOptions: {
      header: true,
    },
    align: "center",
    width: "170px",
  },
  {
    field: "firmware",
    name: "Version",
    mobileOptions: {
      header: true,
    },
    align: "center",
    width: "160px",
  },
  {
    field: "config",
    name: "Version mới",
    mobileOptions: {
      header: true,
    },
    width: "160px",
    align: "center",
    render: (config) => {
      try {
        // Chuyển đổi chuỗi config thành một đối tượng JavaScript
        const parsedConfig = JSON.parse(config);

        // Kiểm tra và hiển thị giá trị của newVersion
        return <EuiText size="s">{JSON.parse(config).newVersion || "N/A"}</EuiText>;
      } catch (e) {
        // Nếu không thể chuyển đổi chuỗi, hiển thị thông báo lỗi
        return <EuiText></EuiText>;
      }
    },
  },
  {
    field: "vehicle_plate",
    name: "Biển số xe",
    mobileOptions: {
      header: true,
    },
    align: "center",
    width:"120px"
  },
  {
    field: "vehicle_model",
    name: "Model xe",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width: "80px",
  },
  {
    field: "vehicle_hang",
    name: "Hạng ",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width: "80px",
  },
  {
    field: "sim",
    name: "Sim",
    align: "center",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "status",
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
    render: (trainee, item) => (
      <EuiProvider className="flex">
        <EuiToolTip position="top" content={`Chỉnh sửa thông tin`}>
          <EuiButtonIcon
            iconType="documentEdit"
            aria-label="Chỉnh sửa"
            size="s"
            color="primary"
            className="mx-2"
            onClick={() => showModal(item)}
          />
        </EuiToolTip>
      </EuiProvider>
    ),
    mobileOptions: {
      header: true,
    },
    className: "sticky right-0",
  },
];
