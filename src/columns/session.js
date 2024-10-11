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
import { format, addMinutes } from "date-fns";
export const createColumns = (
  showModal,
) => [
  {
    field: "trainee_name",
    name: "Tên học viên",
    render: (trainee, item) => (
      <EuiLink>{trainee}</EuiLink>
    ),
    mobileOptions: {
      header: true,
    },
    width: "120px",
  },
  {
    field: "device_id",
    name: "Thiết bị",
    mobileOptions: {
      header: true,
    },
    // width: "160px",
  },
  {
    field: "instructor_name",
    name: "Giáo viên",
    mobileOptions: {
      header: true,
    },
    align: "center",
    width: "170px",
  },
  {
    name: "Biển số xe & Hạng",
    mobileOptions: {
      header: true,
    },
    align: "center",
    width: "200px",
    render: (item) => {
      return (
        <EuiText size="s">
          {item.vehicle_plate ? item.vehicle_plate : "N/A"} - {item.vehicle_hang ? item.vehicle_hang : "N/A"}
        </EuiText>
      );
    },
  },
  {
    field: "start_time",
    name: "Ngày bắt đầu",
    mobileOptions: {
      header: true,
    },
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    width: "140px",
    align: "center",
  },
  {
    field: "end_time",
    name: "Ngày kết thúc",
    mobileOptions: {
      header: true,
    },
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    width: "140px",
    align: "center",
  },
  {
    field: "distance",
    name: "Quãng đường",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width: "80px",
    render: (distance) => {
      return (
        <EuiText size="s">
          {distance.toLocaleString()}
        </EuiText>
      );
    },
  },
  {
    field: "duration",
    name: "Thời gian",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width: "80px",
    render: (duration) => {
      const totalMinutes = Math.floor(duration / 60);
      const date = new Date(0, 0, 0, 0, totalMinutes); 
      return format(date, 'HH:mm'); 
    },
  },
  {
    field: "night_duration",
    name: "Giờ đêm",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width: "80px",
    render: (duration) => {
      const totalMinutes = Math.floor(duration / 60);
      const date = new Date(0, 0, 0, 0, totalMinutes); 
      return format(date, 'HH:mm'); 
    },
  },

  {
    field: "state",
    name: "Trạng thái",
    align: "center",
    mobileOptions: {
      header: true,
    },
    render: (state) => {
      switch (state) {
        case 1:
          return <EuiText>Đang diễn ra</EuiText>;
        case 2:
          return <EuiText>Đã kết thúc</EuiText>;
        case 3:
          return <EuiText>Hoãn</EuiText>;
        case 4:
          return <EuiText>Đang chờ</EuiText>;
        default:
          return <EuiText>Không xác định</EuiText>;
      }
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
